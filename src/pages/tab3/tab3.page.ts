import { Component } from '@angular/core';
import { ModalController, ToastController} from '@ionic/angular';

import { ModalComponent } from '../../component/modal/modal.component';

import { CarService } from '../../service/caring.service';
import { CatalogueService } from '../../service/catalogue.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  productList: Array<any> = [];

  /**
  @description:Constructor
  **/
  constructor(   public carSrv: CarService, 
                 public modalCtrl: ModalController,
                public toastCtrl:ToastController,
                public catalogueServ:CatalogueService) {

  }



  /**
  @description: Se ejecuta cada vez que se muestra la vista. decodifica lo almacenado en localStorage
  **/
  ionViewWillEnter() {
    this.productList = JSON.parse(atob(localStorage.getItem('catalogueItems')))
  }



  /**
  @param {array}product producto a eliminar
  @description:Elimina productos que se encuentran en el localStorage
  **/
  deleteProduct(product) {
    this.productList.splice(this.productList.indexOf(product), 1);
    localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.productList)))
  }



  /**
  @description :Se consume el servicio quien guardara el pedido
  **/
  async add() {
    let sendParams: any = []
    let productos: any = []
    const toast = await this.toastCtrl.create({
      message: 'Se agrego el respectivo pedido',
      duration: 2000
    });
    this.productList.map(product => {
      sendParams.push({
        productId: product.infoItem._id,
        price: product.infoItem.precio,
        quantify: product.totalItems,
        name: product.infoItem.nombre,
        presentation: product.infoItem.presentacion,
        category: product.infoItem.categoria,
        description: product.infoItem.descripcion,
        image: product.infoItem.imagen,
      })
    })

    this.productList.map(product => {
      productos.push({
        "_id":  product.infoItem._id,
        "nombre": product.infoItem.nombre,
        "presentacion": product.infoItem.presentacion,
        "precio": product.infoItem.precio,
        "categoria": product.infoItem.categoria,
        "imagen": product.infoItem.imagen,
        "descripcion": product.infoItem.descripcion,
        "cantidad": product.infoItem.cantidad,
        "cantidadVendido":product.totalItems
      })
    })
    this.catalogueServ.changeQuantity(productos).then(response => {
      this.carSrv.saveSale(sendParams).then(response => {
        toast.present();
        localStorage.getItem("catalogueItems",)
        this.productList = [];
      }).catch(err => {
        console.log(err)
      })
    })
  }



  /**
  @description:Modal que lista los pedidos realizados por el usuario 
  **/
  async listOrders() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    modal.present();
  }
}
