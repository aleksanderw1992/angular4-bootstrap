import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    // send the error to the server
    console.log(error);

  }
}
