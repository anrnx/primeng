import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtUtil } from './JwtUtil';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const authorizationToken = JwtUtil.getToken();
        if (JwtUtil.isValidToken()) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${authorizationToken}` }
            });
            return next.handle(request);
        } else {
            this.router.navigate(['auth/login']);
            return next.handle(request);
        }
        
        
    }
}