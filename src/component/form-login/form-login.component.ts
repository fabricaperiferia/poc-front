import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {HomePage} from '../../pages/home/home.page';
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
  constructor( public router:Router) {

  }

  loginApp() {
    this.router.navigateByUrl(`/home`);
  }
}