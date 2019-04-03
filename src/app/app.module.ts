import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http'
import {CatalogueService} from '../service/catalogue.service'
import {LoginService} from '../service/login.service'
import {CarService} from '../service/caring.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../component/navbar/navbar.component'
import { ModalComponent } from '../component/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    CatalogueService,
    LoginService,
    CarService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
