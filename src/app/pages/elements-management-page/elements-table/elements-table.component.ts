import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppEventHolder } from '../../../common/app-events-holder.service'


@Component({
  selector: 'app-elements-table',
  templateUrl: './elements-table.component.html',
  styleUrls: ['./elements-table.component.scss']
})
export class ElementsTableComponent implements OnInit {
  element='';
  constructor(private router: Router,
              private route: ActivatedRoute,
  private appEventHolder:AppEventHolder) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
        (params: Params) => {
          this.element = params['element-name'];
            this.appEventHolder.publishElement(this.element)
        }
    );
  }

}
