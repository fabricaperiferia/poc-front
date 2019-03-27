import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

  constructor(
    private _http: HttpClient
  ) {}

  login(): Promise<any> {
    return this._http.get('http://localhost:3000/catalogue').toPromise()
  }

}
