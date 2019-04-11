import { Component } from '@angular/core';
import { CatalogueService } from '../../service/catalogue.service'
import { LoadingController, AlertController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    catalogueList: Array<any> = [];
    searchTerm: String;
    localStorageValue: any = [];

    constructor(public catServ: CatalogueService, public loadingCtrl: LoadingController,
        public alertCtrl: AlertController, public toastCtrl: ToastController) {

    }

    /**
        @description: Se ejecuta cada vez que se muestra la vista. decodifica lo almacenado en localStorage
        **/
    async ionViewWillEnter() {
        const loading = await this.loadingCtrl.create({
            message: 'Cargando ...',
            spinner: 'dots',
            cssClass: 'loading-generic',
        });
        loading.present();
        this.catServ.findAll().then(response => {
            loading.dismiss();
            this.catalogueList = response.product
        }).catch(err => {
            loading.dismiss();
        })
    }

    /**
     * @description  Filtra por valores del item
    */

    async filterItems() {
        this.catServ.findFilter(this.searchTerm).then(response => {
            this.catalogueList = response.product
        }).catch(err => {
            console.log(err)
        })
    }

    /** 
     * @param {array}value: valor que que se va agrear
     * @param {number}second: Cantidad de veces que se desea el producto
     * @description Se agrega valores para agregar un nuevo producto a localStorage 
    */
    async addVal(value, second) {
        second = second === undefined ? 1 : second
        const toast = await this.toastCtrl.create({
            message: 'Se agrego producto al carrito de compra.',
            duration: 2000
        });

        toast.present();
        if (localStorage.getItem("catalogueItems") === "W10=") {
            this.localStorageValue = []
        }
        else {
            this.localStorageValue = JSON.parse(atob(localStorage.getItem("catalogueItems")))
        }
        this.catalogueList.forEach(element => {
            element.cantidad = value._id === element._id ? element.cantidad - second : element.cantidad
        });

        this.localStorageValue.push({
            infoItem: value,
            totalItems: second === undefined ? 1 : second,
            totalValueItems: second === undefined ? value.precio : value.precio * second
        })

        localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.localStorageValue)))
        toast.present();
    }
}
