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
    //todo sorry big hack
    if("Uncaught (in promise): Error: Cannot activate an already activated outlet" === error.message.substr(0,73)) return
    console.log('logging error message: '+error.message);
    this.holder.updateMessage(error.message)
    this.router.navigate(['/error'])
  }

  public get router(): Router {
    return this.injector.get(Router);
  }
}
