import { Component } from '@angular/core';
import { CarService } from '../../service/caring.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  productList: Array<any> = [];

  constructor(public carSrv:CarService){

  }

  ionViewWillEnter() {
    this.productList = JSON.parse(atob(localStorage.getItem('catalogueItems')))
  }

  deleteProduct(product) {
    this.productList.splice(this.productList.indexOf(product), 1);
    localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.productList)))
  }

  add(){
   let sendParams:any = []
    // console.log(this.productList)
    this.productList.map(product => {
     sendParams.push({
       productId:product.infoItem._id,
       price:product.infoItem.precio,
       quantify:product.totalItems,
       name:product.infoItem.nombre,
       presentation:product.infoItem.presentacion,
       category:product.infoItem.categoria,
       description:product.infoItem.descripcion,
       image:product.infoItem.imagen,
     })
   })
    this.carSrv.saveSale(sendParams).then( response =>{
    console.log(response)
    }).catch(err => {
      console.log(err)
    })
    // console.log(product)
  }
}
