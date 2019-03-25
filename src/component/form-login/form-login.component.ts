import { Component } from '@angular/core';

import { User } from '../../models/user'

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
  constructor( ) {

  }

  loginApp() {
  console.log(this.user)
  }
}