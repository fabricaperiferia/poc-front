import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-form-login',
  templateUrl: 'form-login.component.html',
  styleUrls: ['form-login.component.scss'],
})

export class FormLoginComponent {
  user: {} = {
    userName: "",
    password: ""
  };
  constructor(public router: Router, public loginSrv: LoginService, public loadingCtrl: LoadingController) {

  }

  async loginApp() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando ...',
      spinner:'dots',
      cssClass:'loading-generic',
    });
    loading.present();
    this.loginSrv.login().then(response => {
    loading.dismiss();
      this.router.navigateByUrl(`o`);
    }).catch(err => {
      console.log(err)
    })

  }
}