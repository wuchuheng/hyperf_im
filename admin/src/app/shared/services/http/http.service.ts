import {forwardRef, inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Store, select } from "@ngrx/store";
import {catchError, take} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

export type errorType = {
  errorCode: number,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  private baseUrl: string;

  constructor(private http: HttpClient,
              private store: Store<{'auth'}>
              )
  {
    this.baseUrl = environment.baseUrl;
  }

  private getHttpOptions()
  {
    let headerOptions = { 'Content-Type': 'application/json' };
    const httpOptions = {
      headers: new HttpHeaders(headerOptions)
    };
    return httpOptions;
  }

  private transformationUrl(url: string): string
  {
    return `${this.baseUrl}${url}`;
  }

  public getToken()
  {
    return new Promise<string>(resolve =>{
      this.store.pipe(select('auth'), take(1))
        .toPromise()
        .then(auth => {
          const token = auth.token && auth.token.length > 0 ? auth.token : '';
          resolve(token)
        })
    });
  }

  public post(url: string, params:{} = {} ): Promise<any>
  {
    const fullUrl = this.transformationUrl(url);
    return this.unifyPipe(this.http.post(fullUrl, params, this.getHttpOptions()));
  }

  public get(url: string): Observable<any>
  {
    const fullUrl = this.transformationUrl(url);
    return this.http.get<any>(fullUrl, this.getHttpOptions())
  }

  /**
   *  this is the unify pipe for all request actions
   * @param res
   */
  private unifyPipe(res: Observable<any>): Promise<any>
  {
      return new Promise((resolve, reject) => {
        res.pipe(
          catchError(this.handleError)
        ).subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err.error)
          }
        )
      });
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  }
}
