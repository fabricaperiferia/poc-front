import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'


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
  let value = {
    userId:"5ca2872df6b2639cae653f9f"
 }
 let options = {
   headers:this.authTokenHeaders()
 };
  return this._http.post('http://localhost:9000/orders/user',value,options).toPromise()
}

  saveSale(Params): Promise<any> {
    let value = {
       userId:"5ca2872df6b2639cae653f9f",
       creation:new Date(),
       detail:Params
    }
    let options = {
      headers:this.authTokenHeaders()
    };
    return this._http.post('http://localhost:9000/orders/checkout',value,options).toPromise()
  }

}
