import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import  { environment } from '../environments/environment' 

@Injectable()
export class CarService {

  constructor(
    private _http: HttpClient
  ) {}

  authTokenHeaders() {
    return {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
}

findAll(): Promise<any> {

 let options = {
   headers:this.authTokenHeaders()
 };
  return this._http.post(`${environment.pedidos}/orders/user`, "usuarioid",options).toPromise()
}

  saveSale(Params): Promise<any> {
    let value = {
      userId:"usuarioid",
       creation:new Date(),
       detail:Params
    }
    let options = {
      headers:this.authTokenHeaders()
    };
    return this._http.post(`${environment.pedidos}/orders/checkout`,value,options).toPromise()
  }

}
