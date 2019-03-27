import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {LoginService} from '../../service/login.service'
@Component({
  selector: 'app-form-login',
  templateUrl: 'form-login.component.html',
  styleUrls: ['form-login.component.scss'],
})

export class FormLoginComponent {
  user:{}={
    userName:"",
    password:""
  };
  constructor( public router:Router, public loginSrv:LoginService) {

  }

  loginApp() {
    this.loginSrv.login().then(response => {
      this.router.navigateByUrl(`o`);
    }).catch(err => {
      console.log(err)
    })
    
  }
}