import { Component } from '@angular/core';
import {CatalogueService} from '../../service/catalogue.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public catServ:CatalogueService){
    catServ.findAll().then(response =>{
console.log(response)
    }).catch(err => {
console.log(err)
    })
   
}


}
