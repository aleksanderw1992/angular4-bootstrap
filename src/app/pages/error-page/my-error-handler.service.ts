import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {MyErrorMessageHolder} from "./my-error-message-holder.service";
import get = Reflect.get;

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(private injector: Injector,
              private holder: MyErrorMessageHolder) {
  }

  handleError(error) {
    // console.log(error.message);
    this.holder.updateMessage(error.message)
    this.router.navigate(['/error'])
  }

  public get router(): Router {
    return this.injector.get(Router);
  }
}
