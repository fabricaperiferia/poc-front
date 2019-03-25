import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import {FormLoginComponent} from '../../component/form-login/form-login.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component:  LoginPage }])
 ],
  declarations: [LoginPage,FormLoginComponent]
})
export class LoginPageModule {}
