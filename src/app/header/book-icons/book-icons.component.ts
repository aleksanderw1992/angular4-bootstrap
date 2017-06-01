import { Component, OnInit } from '@angular/core';
import {Repository} from "../../pages/elements-management-page/elements-domain/repository.service";

@Component({
  selector: 'app-book-icons',
  templateUrl: './book-icons.component.html',
  styleUrls: ['./book-icons.component.scss']
})
export class BookIconsComponent implements OnInit {
  private books: Array<any>;

  constructor(private  repository:Repository) { }

  ngOnInit() {
    this.books = this.repository.getAll('book');
  }

}
