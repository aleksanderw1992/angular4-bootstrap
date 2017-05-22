import {Component, OnInit} from '@angular/core';
import {Repository} from "../elements-management-page/elements-table/repository.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  constructor(private repository: Repository,) {
  }

  ngOnInit() {
  }

  getOrderBooks() {
    return this.repository.getAll('orderedBook')
  }

}
