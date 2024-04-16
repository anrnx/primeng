import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class I18nFrHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedRequest = req;

      if (req && (req.method == 'PATCH' || req.method == 'POST')) {
        var body = req.body;

        if (body != null && body.i18n != null && body.i18n.fr != null) delete body.i18n.fr;

        const clonedRequest = req.clone({
          body: body
        });
        return next.handle(clonedRequest);
      }

      return next.handle(clonedRequest);
    }

}