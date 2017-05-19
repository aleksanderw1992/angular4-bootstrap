import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AppEventHolder} from '../../../common/app-events-holder.service'
import {TableModel} from './table-model.model';
import {Repository} from "./repository.service";
import {element} from "protractor";

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
              private repository: Repository) {
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

}
