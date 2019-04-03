import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CarService } from '../../service/caring.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  productList: Array<any> = [];

  constructor(public carSrv: CarService,public modalCtrl: ModalController) { }

  ngOnInit() {
    this.carSrv.findAll().then(response => {
      console.log(response)
      this.productList = response.payload.Orders;
      console.log(this.productList)
  }).catch(err => {
     console.log(err)
  })
  }

  cancelParam(){
    console.log('entro')
    this.modalCtrl.dismiss()
  }

}
