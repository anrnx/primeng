import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export class ErrorHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      return next.handle(request)
          .pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status && (error.status == 403)) {
        this.router.navigate(["/forbidden"]);
    } else if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  // logout() {
  //   this.authService.logout('email').subscribe(data => console.log(data));
  // }
}

function Injectable(): (target: typeof ErrorHttpInterceptor, context: ClassDecoratorContext<typeof ErrorHttpInterceptor>) => void | typeof ErrorHttpInterceptor {
  throw new Error("Function not implemented.");
}

