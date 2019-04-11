import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


import  { environment } from '../environments/environment' 
@Injectable()
export class CatalogueService {

  constructor(
    private _http: HttpClient
  ) {}

  authTokenHeaders() {
    return {
       "Content-type":"application/json",
    }
}

  findAll(): Promise<any> {
    return this._http.get(`${environment.catalogo}/catalogue`).toPromise()
  }

  findFilter(value:any): Promise<any> {
    return this._http.get(`${environment.catalogo}/catalogue/${value}`).toPromise()
  }

  changeQuantity(params):Promise<any>{
    let options = {
      headers:this.authTokenHeaders()
    };
    console.log(params)
    return this._http.post(`${environment.catalogo}/catalogue/change`,{"productos":params},options).toPromise()
  }
  }

