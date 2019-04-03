import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class CatalogueService {

  constructor(
    private _http: HttpClient
  ) {}

  findAll(): Promise<any> {
    return this._http.get('http://172.168.10.52:32647/catalogue').toPromise()
  }

  findFilter(value:any): Promise<any> {
    return this._http.get(`'http://172.168.10.52:32647/catalogue/${value}`).toPromise()
  }

}
