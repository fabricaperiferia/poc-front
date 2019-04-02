import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../service/login.service'
import { LoadingController, AlertController } from '@ionic/angular';

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
  constructor(public router: Router,
    public loginSrv: LoginService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  async loginApp() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando ...',
      spinner: 'dots',
      cssClass: 'loading-generic',
    });
    const alert = await this.alertCtrl.create({
      header: 'Bienvenido ',
      message: 'Ingresa y disfruta de nuestro sitio ',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.router.navigateByUrl(`o`);
          }
        }
      ]
    });

    const alertError = await this.alertCtrl.create({
      header: 'Usuario o contraseña invalido ',
      message: 'Agrega un usuario o contraseña valida ',
      cssClass: 'alert',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
          }
        }
      ]
    });
    loading.present();
    this.loginSrv.login(this.user).then(response => {
      localStorage.setItem('token',response.access_token);
      loading.dismiss();
      alert.present();
    }).catch(err => {
      console.log(err)
      loading.dismiss();
      alertError.present();
    })
  }
}