import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class LangHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedRequest = req;

      if (req.headers) {
        const clonedRequest = req.clone({
          // headers: req.headers.set('accept-language', this.translate.currentLang)
          headers: req.headers.set('Accept-Language', 'fr')
        });
        return next.handle(clonedRequest);
      }

      return next.handle(clonedRequest);
    }

}