import {mainUrl} from './common';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wine} from '../models/wine.model.client';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};

@Injectable()
export class WineServiceClient {
  private wineUrl = mainUrl + '/rest/api/wines';

  // const test = {
  //   name: 'zilan',
  // };

  constructor(
    private http: HttpClient
    // private searchService:
  ) { }

  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.wineUrl);
  }

  getWine(id: Number): Observable<Wine> {
    const url = this.wineUrl + '/' + id;
    console.log(url);
    return null;
  }
}

