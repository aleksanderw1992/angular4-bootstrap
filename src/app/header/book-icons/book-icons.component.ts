import { Component, OnInit } from '@angular/core';
import {Repository} from "../../pages/elements-management-page/elements-domain/repository.service";
import {AppEventHolder} from "../../common/app-events-holder.service";

@Component({
  selector: 'app-book-icons',
  templateUrl: './book-icons.component.html',
  styleUrls: ['./book-icons.component.scss']
})
export class BookIconsComponent implements OnInit {
  private books: Array<any>;

  constructor(private repository:Repository,
  private appEventHolder: AppEventHolder) { }

  ngOnInit() {
    let fetchBooks = function () {
      let maxExpandableBookNumber = 8;
      let books = this.repository.getAll('book').filter(e=>e);
      this.books = books.splice(Math.max(books.length - maxExpandableBookNumber,0));
    };
    fetchBooks.call(this);
    this.appEventHolder.elementChanged.subscribe(e=>{
      if(e==='book'){
        fetchBooks.call(this);
      }
    })
  }

}
