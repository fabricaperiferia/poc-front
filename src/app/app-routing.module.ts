import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from '../pages/home/home.page'
const routes: Routes = [
  { path: '', loadChildren: '../pages/login/login.module#LoginPageModule'},
  { path: 'home',  component: HomePage}

 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
