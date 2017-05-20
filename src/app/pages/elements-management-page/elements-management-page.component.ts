import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppEventHolder } from '../../common/app-events-holder.service'
import {UrlSegment} from "@angular/router";

import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-elements-management-page',
  templateUrl: './elements-management-page.component.html',
  styleUrls: ['./elements-management-page.component.scss']
})
export class ElementsManagementPageComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
  private appEventHolder:AppEventHolder) {

}
  element='';
  ngOnInit() {
    let page =( this.route as any).url.value[0].path;
    this.appEventHolder.publishPage(page);
    this.appEventHolder.element.subscribe((data) => {
      this.element = data;
    });
  }
  onElementChosen(){
    this.router.navigate([this.element], {relativeTo: this.route});

  }

}
