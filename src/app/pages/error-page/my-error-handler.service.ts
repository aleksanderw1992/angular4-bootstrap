import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {MyErrorMessageHolder} from "./my-error-message-holder.service";
import get = Reflect.get;

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(private injector: Injector,
              private holder: MyErrorMessageHolder) {
  }
  private anyErrorWithin2secunds=false;

  handleError(error) {
    //todo sorry big hack
    if(this.anyErrorWithin2secunds)return;
    this.anyErrorWithin2secunds=true;
    setTimeout(()=>{this.anyErrorWithin2secunds=false;},2000);
    console.log('logging error message: '+error.message);
    this.holder.updateMessage(error.message)
    this.router.navigate(['/error'])
  }

  public get router(): Router {
    return this.injector.get(Router);
  }
}
