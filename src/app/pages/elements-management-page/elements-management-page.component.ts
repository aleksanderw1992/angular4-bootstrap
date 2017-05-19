import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppEventHolder } from '../../common/app-events-holder.service'


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
    this.appEventHolder.event.subscribe((data) => {
      this.element = data;
    });
  }
  onElementChosen(){
    this.router.navigate([this.element], {relativeTo: this.route});

  }

}
