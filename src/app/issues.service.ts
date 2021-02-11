import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private apiUrl = "https://api.github.com/";
  search = "repo:angular/angular/node+type:issue+state:open";
  per_page = 10;
  page = 1;
  detail= "repos/angular/angular";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getIssuesList(search = this.search, per_page = this.per_page, page = this.page): Observable<any> {
    let listUrl = "search/issues?q=" + search + "&per_page=" + per_page + "&page=" + page;
    return this.http.get<{}>(this.apiUrl + listUrl);
  }

  getDetail(detail = this.detail): Observable<any> {
    return this.http.get<{}>(this.apiUrl + detail);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
