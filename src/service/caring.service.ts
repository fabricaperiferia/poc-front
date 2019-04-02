import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class CarService {

  constructor(
    private _http: HttpClient
  ) {}

  saveSale(Params): Promise<any> {
    return this._http.post('http://localhost:9000/orders/checkout',Params).toPromise()
  }

}
