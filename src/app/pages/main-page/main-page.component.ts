import {Component, OnInit} from '@angular/core';
import {Repository} from "../elements-management-page/elements-domain/repository.service";

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
    let books = this.repository.getAll('orderedBook');
    let booksMaxThree = books.sort((a, b)=>b.orderCount-a.orderCount||a.bookId-b.bookId).slice(0,3);
    let arr=[]
    booksMaxThree.forEach((e)=>{
      if(e){
        let book = this.repository.get("book", e.bookId);
        arr.push({
          bookTitle: book.title,
          orderCount: e.orderCount
        });
      }
    });
    return arr
  }

}
