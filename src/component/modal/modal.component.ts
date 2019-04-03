import { Component, OnInit } from '@angular/core';
import { ModalController,NavController} from '@ionic/angular';

import { CarService } from '../../service/caring.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  productList: Array<any> = [];
   detailList:Array<any> = [];
  constructor(public carSrv: CarService,public modalCtrl: ModalController,public navCtrl:NavController) { }

  ngOnInit() {
    this.carSrv.findAll().then(response => {
      this.productList = response.payload.Orders;
      console.log(this.productList)
  }).catch(err => {
     console.log(err)
  })
  }

  cancelParam(){
    this.modalCtrl.dismiss()
  }
  detailProduct(product){
    this.detailList = product;
  }

  deleteParams(){
    this.detailList = []
  }

}
