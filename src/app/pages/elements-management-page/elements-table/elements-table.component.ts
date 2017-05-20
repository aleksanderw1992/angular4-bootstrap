import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppEventHolder} from '../../../common/app-events-holder.service'
import {TableModel} from './table-model.model';
import {Repository} from "./repository.service";
import {ElementDetailsDialogComponent} from "app/pages/elements-management-page/element-details-dialog/element-details-dialog.component";
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

export declare type CrudDialogOption = 'view' | 'add' | 'edit' | 'delete';


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


  constructor(private router: Router,
              private route: ActivatedRoute,
              private appEventHolder: AppEventHolder,
              private tableModel: TableModel,
              private repository: Repository,
              public dialog: MdDialog) {
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
    let dialogRef = this.dialog.open(ElementDetailsDialogComponent, {
      data: {
        crudDialogOption: crudDialogOption,
        element: this.element,
        model: this.model,
        data: this.data[i],
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


}
