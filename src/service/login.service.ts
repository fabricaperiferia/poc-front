import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import axios from "axios";

@Injectable()
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

   authHeaders() {
    return {
        Authorization: `Basic YXV0aC1jbGllbnQ6c2VjcmV0`,
    }
}

  login(user): Promise<any> {
    var bodyFormData = new FormData();
    bodyFormData.set('grant_type', 'password');
    bodyFormData.set('username', user.userName);
    bodyFormData.set('password', user.password);
    let options = {
      headers:this.authHeaders()
    };
    return this._http.post(`${process.env.autenticacion}/oauth/token`, bodyFormData, options).toPromise()
  }

}
