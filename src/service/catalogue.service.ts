import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


import  { environment } from '../environments/environment' 
@Injectable()
export class CatalogueService {

  constructor(
    private _http: HttpClient
  ) {}

  findAll(): Promise<any> {
    console.log(environment.catalogo)
    return this._http.get(`${environment.catalogo}/catalogue`).toPromise()
  }

  findFilter(value:any): Promise<any> {
    return this._http.get(`${environment.catalogo}/catalogue/${value}`).toPromise()
  }

}
