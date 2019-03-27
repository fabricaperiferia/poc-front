import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class CarService {

  constructor(
    private _http: HttpClient
  ) {}

  saveSale(): Promise<any> {
    return this._http.get('http://localhost:3000/catalogue').toPromise()
  }

}
