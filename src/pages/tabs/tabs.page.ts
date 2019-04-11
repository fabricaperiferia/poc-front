import { Component } from '@angular/core';
import { IonicModule,ToastController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { TabsPageRoutingModule } from './tabs.router.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
})
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
constructor(public router: Router,
  public toastCtrl:ToastController,){

}
async ionViewWillEnter(){
  const toast = await this.toastCtrl.create({
    message: 'Su sesión ha expirado o no tiene acceso a esta página',
    duration: 4000
  });
  if(localStorage.getItem('token') === null){
    toast.present();
    this.router.navigateByUrl(`/`);
  } 
  }
}
