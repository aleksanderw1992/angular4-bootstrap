import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class MyErrorMessageHolder {
  private _message = new BehaviorSubject<string>('');;

  updateMessage(message:string){
    this._message.next(message)
  }

  get message() {
    return this._message.asObservable();
  }

}
