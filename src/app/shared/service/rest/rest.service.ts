
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RestService {

  private url: string;
  private headers: Headers;


  constructor(
    private http: Http,
    private router: Router
  ) {
    this.url = 'http://localhost:8080/';
    this.headers = new Headers();
  }

  /**
   * Rest GET
   * @param {string} endpoint - Rest GET name of endpoint
   */
  public get(endpoint): Observable<any> {
    return this.http.get(this.url + endpoint)
      .map((response) => response)
      .catch((response) => {
        return this.handleResponseError(response);
      });
  }

  /**
   * Rest POST
   * @param {string} endpoint - Rest POST name of endpoint
   * @param {Object} data - post-data
   * @param {boolean} isFormEncoded - by true send post with form-urlencoded-type
   */
  public post(endpoint, data, isFormEncoded = false): Observable<any> {
    const contentType = isFormEncoded === false ? "application/json" : "application/x-www-form-urlencoded";
    this.deleteHeaderContentType();
    this.headers.append('Content-Type', contentType);

    return this.http.post(this.url + endpoint, data, {headers: this.headers})
      .map((response) => response)
      .catch((response) => {
        return this.handleResponseError(response);
      });
  }

  /**
   * Rest PUT
   * @param {string} endpoint - Rest PUT name of endpoint
   * @param {Object} data
   */
  public put(endpoint, data): Observable<any> {
    this.deleteHeaderContentType();
    this.headers.append('Content-Type', "application/json");

    return this.http.put(this.url + endpoint, data, {headers: this.headers})
      .map((response) => response)
      .catch((response) => {
        return this.handleResponseError(response);
      });
  }

  /**
   * Rest Error-Handler
   * @param {Object} response
   */
  private handleResponseError(response): Observable<any> {
    return Observable.throw(response);
  }

  /**
   * Delete last Header-Content-Type
   */
  public deleteHeaderContentType(): void {
    this.headers.delete('Content-Type');
  }
}
