
import { Component, Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user'
@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})

export class LoginPage {
  myForm: FormGroup;
  user = {} as User;
  urlFoundImg: String = 'assets/img/fondo-login.png';
  constructor() {

  }

  loginApp() {
    this.user = this.myForm.value;
    console.log(this.user)
  }
}