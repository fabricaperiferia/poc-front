import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import axios from "axios";

@Injectable()
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }



  login(user): Promise<any> {
    console.log(user)
    var bodyFormData = new FormData();
    bodyFormData.set('grant_type', 'password');
    bodyFormData.set('username', user.username);
    bodyFormData.set('password', user.password);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this._http.post('http://localhost:8080/oauth/token', bodyFormData, options).toPromise()
  }

}
