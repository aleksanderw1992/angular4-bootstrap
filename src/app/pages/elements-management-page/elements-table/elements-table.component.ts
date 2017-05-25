import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {AppEventHolder} from "../../../common/app-events-holder.service";
import {TableModel} from "../elements-domain/table-model.model";
import {Repository} from "../elements-domain/repository.service";
import {ElementDetailsDialogComponent} from "app/pages/elements-management-page/element-details-dialog/element-details-dialog.component";
import {MdDialog} from "@angular/material";
import {AuthenticationService} from "../../../auth/authentication.service";
import {AlertDialogComponent} from "../../../common/alert-dialog/alert-dialog.component";

export declare type CrudDialogOption = 'view' | 'add' | 'edit' | 'delete';
export class SortType {
  private _types: Array<string> = ['none', 'asc', 'desc'];
  private _currentType: string = 'none';

  currentType(): string {
    return this._currentType;
  }

  next() {
    let nextIndex: number = (this._types.indexOf(this._currentType) + 1) % 3;
    this._currentType = this._types[nextIndex] as string
  }

  resetAndNext() {
    this._currentType = 'asc'
  }
  getSortFactor():number {
    switch (this._currentType){
      case 'asc':
        return 1
      case 'desc':
        return -1
    }
    return 0
  }
  getClass():string {
    switch (this._currentType){
      case 'asc':
        return 'glyphicon glyphicon-sort-by-attributes'
      case 'desc':
        return 'glyphicon glyphicon-sort-by-attributes-alt'
    }
    return ''
  }
  isNotNone(){
    return this._currentType!=='none';
  }
}


@Component({
  selector: 'app-elements-table',
  templateUrl: './elements-table.component.html',
  styleUrls: ['./elements-table.component.scss'],
  providers: [TableModel]
})
export class ElementsTableComponent implements OnInit {
  element = '';
  model: any;
  data: Array<any>;
  sortType: SortType = new SortType();
  sortedCol: any;
  elemOnPage:number=5;

  constructor(private route: ActivatedRoute,
              private appEventHolder: AppEventHolder,
              private tableModel: TableModel,
              private repository: Repository,
              public dialog: MdDialog,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.element = params['element-name'];
          this.appEventHolder.publishElement(this.element);
          this.model = this.tableModel.model[this.element];
          this.data = this.repository.getAll(this.element);
        }
      );
  }


  openDialog(crudDialogOption: CrudDialogOption, i: number) {
    if (crudDialogOption !== 'view' && this.disableEditingAccess()) {
      let dialogRef = this.dialog.open(AlertDialogComponent, {
        data: {
          content: 'Nie masz wystarczających uprawnień'
        },
        disableClose: true,
        role: 'dialog'
      });
      dialogRef.afterClosed().subscribe(() => {
        this.data = this.repository.getAll(this.element);
        return
      });
      return
    }
    let dialogRef = this.dialog.open(ElementDetailsDialogComponent, {
      data: {
        crudDialogOption: crudDialogOption,
        element: this.element,
        model: this.model,
        data: crudDialogOption !== 'add' && this.getData().filter(e => e.i === i)[0].data,
      },
      disableClose: true,
      role: 'dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'cancelled')return
      switch (result.crudDialogOption) {
        case 'view' :
          return
        case 'add' :
          this.repository.save(result.element, result.data)
          break
        case 'edit' :
          this.repository.update(result.element, i, result.data)
          break
        case 'delete':
          this.repository.delete(result.element, i)
          break
      }
      this.data = this.repository.getAll(this.element);
    });
  }

  add(i: number) {
    this.openDialog("add", i)
  }

  view(i: number) {
    this.openDialog("view", i)

  }

  edit(i: number) {
    this.openDialog("edit", i)
  }

  delete(i: number) {
    this.openDialog("delete", i)
  }

  getTd(row, col) {
    if (this.element === 'country' && col.colName === 'flag') {
      let imgPath = row[col.colName];
      return '<img alt="flag" height="50px" width="50px" src="' + imgPath + '">'
    }
    if (this.element === 'book' && col.colName === 'coverImg') {
      let imgPath = row[col.colName];
      return '<img alt="book cover" height="50px" width="50px" src="' + imgPath + '">'
    }
    return row[col.colName];
  }

  disableEditingAccess() {
    let isRestrictedElement = ['medium', 'cover', 'category'].indexOf(this.element) > -1;
    let hasSpecialRights = this.authService.hasSpecialRights()
    return isRestrictedElement && !hasSpecialRights
  }

  order(i: number) {
    this.repository.addSingleOrder(i)
    let dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {
        content: 'Dodano jeden egzemplarz książki do koszyka'
      },
      disableClose: true,
      role: 'dialog'
    });
    dialogRef.afterClosed().subscribe(() => {
      return
    });
  }

  getData() {
    let arr = []
    this.data.forEach((e, ind) => {
      if (e) {
        arr.push({
          i: ind,
          data: e
        });
      }
    });
    if(this.sortedCol && this.sortType.isNotNone()){
      arr.sort((a,b)=>{return this.sortType.getSortFactor()*(a.data[this.sortedCol.colName].localeCompare(b.data[this.sortedCol.colName]))})
    }
    return arr
  }

  sort(a) {
    if (!a.notSortable) {
      if (!this.sortedCol) {
        this.sortedCol = a
        this.sortType.next()
      } else {
        let sameCol = a === this.sortedCol;
        if (sameCol) {
          this.sortType.next()
        } else {
          this.sortType.resetAndNext()
          this.sortedCol = a
        }
      }
    }
  }
  getPage(){
    let rowCount = this.data.filter(e=>e).length;
    return Math.floor(rowCount/ this.elemOnPage)+1
  }
}
