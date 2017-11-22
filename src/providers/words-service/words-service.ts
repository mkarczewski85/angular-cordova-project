import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { WordEntry } from '../../model/wordentry';



@Injectable()
export class WordsServiceProvider {

  baseURL = 'http://localhost:8090/api/words/';


  constructor(public http: HttpClient) {
  }

  public getResults(letters, option): Observable<WordEntry[]> {
    let params = new HttpParams().set("letters", letters).set("option", option);
    return this.http.get(this.baseURL, { params: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // let body = res.json();
    return res || [];
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
