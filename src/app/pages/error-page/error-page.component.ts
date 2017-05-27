import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Data} from "@angular/router";
import {MyErrorMessageHolder} from "./my-error-message-holder.service";


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit{
  errorMessage: string;

  constructor(private route: ActivatedRoute, private messageHolder: MyErrorMessageHolder) {
  }

  ngOnInit() {
    this.messageHolder.message.subscribe((message) => {
      this.errorMessage = message;
    })
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
