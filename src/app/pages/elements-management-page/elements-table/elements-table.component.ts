import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-elements-table',
  templateUrl: './elements-table.component.html',
  styleUrls: ['./elements-table.component.scss']
})
export class ElementsTableComponent implements OnInit {
  element='';
  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
        (params: Params) => {
          this.element = params['element-name'];
          //todo link from here to elem-management to bind when come directly from routing
        }
    );
  }

}
