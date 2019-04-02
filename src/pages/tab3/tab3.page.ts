import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  productList: Array<any> = [];

  ionViewWillEnter() {
    this.productList = JSON.parse(atob(localStorage.getItem('catalogueItems')))
    console.log(this.productList)
  }

  deleteProduct(product) {
    this.productList.splice(this.productList.indexOf(product), 1);
    localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.productList)))
  }

}
