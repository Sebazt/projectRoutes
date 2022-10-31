import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    console.log('Paso por el interceptor');

    const headers = new HttpHeaders({
      'name':'BeeSoftLabs'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone);
  }
}
