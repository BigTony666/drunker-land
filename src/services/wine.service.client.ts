import {mainUrl} from './common';
import {Injectable} from '@angular/core';

@Injectable()
export class WineServiceClient {
  private wineUrl = mainUrl + '/rest/api/wines';

  constructor(
  ) { }
  //
  // getWines(): Observable<Wine[]> {
  //   return this.http.get<Wine[]>(this.wineUrl);
  // }
  //
  getWineById = id => {
    fetch(this.wineUrl + '/' + id)
      .then(res => res.json());
  }

  getWinesByName = name =>
    fetch(this.wineUrl + '/name/' + name)
      .then(res => res.json())
  //
  // getWinesByVintage(name: String): Observable<Wine[]> {
  //   const url = this.wineUrl + '/name/' + name;
  //   console.log(url);
  //   return null;
  // }
}

