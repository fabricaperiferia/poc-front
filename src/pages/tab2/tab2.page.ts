import { Component } from '@angular/core';
import { CatalogueService } from '../../service/catalogue.service'
import { LoadingController, AlertController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    catalogueList: Array<any>=[];
    searchTerm: String;
    localStorageValue: any = [];

    constructor(public catServ: CatalogueService, public loadingCtrl: LoadingController,
        public alertCtrl: AlertController, public toastCtrl: ToastController) {

    }

    /**
        @description: Se ejecuta cada vez que se muestra la vista. decodifica lo almacenado en localStorage
        **/
    async ionViewWillEnter() {
        let valueFinal: Array<any> = [];
        const loading = await this.loadingCtrl.create({
            message: 'Cargando ...',
            spinner: 'dots',
            cssClass: 'loading-generic',
        });
        loading.present();
        this.catServ.findAll().then(response => {
            loading.dismiss();
            let storageLocal = localStorage.getItem("catalogueItems") !== null ?
            JSON.parse(atob(localStorage.getItem("catalogueItems")))
            :
            []
            if (storageLocal.length !== 0) {
                response.product.map(value => {
                    let responseFinal = storageLocal.find(valueCatalogue => valueCatalogue.infoItem._id === value._id) !== undefined
                        ? storageLocal.find(valueCatalogue => valueCatalogue.infoItem._id === value._id).infoItem : value
                    valueFinal.push(responseFinal)
                })
                this.catalogueList = valueFinal
            }
            else {
                console.log(response.product)
                this.catalogueList = response.product
            }
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
        let quantityCompliance = false

        const toast = await this.toastCtrl.create({
            message: 'Se agrego producto al carrito de compra.',
            duration: 2000
        });
        const toastError = await this.toastCtrl.create({
            message: 'Lo sentimos no contamos con la cantidad de productos, para tu necesidad',
            duration: 4000
        });

        toast.present();
        if (localStorage.getItem("catalogueItems") === "W10=") {
            this.localStorageValue = []
        }
        else {
            this.localStorageValue = JSON.parse(atob(localStorage.getItem("catalogueItems")))
        }
        this.catalogueList.forEach(element => {
            if (value._id === element._id) {
                if (second <= element.cantidad) {
                    element.cantidad = element.cantidad - second
                    quantityCompliance = true
                }
                else {
                    toastError.present()
                    quantityCompliance = false
                }
            }
        });
        if (quantityCompliance) {
            if (this.localStorageValue.find(valueCatalogue => valueCatalogue.infoItem._id === value._id) !== undefined) {
                let sendStorage: Array<any> = [];
                this.localStorageValue.forEach(storageValue => {
                    storageValue = storageValue.infoItem._id === value._id ?
                        {
                            infoItem: value,
                            totalItems: (storageValue.totalItems + second),
                            totalValueItems: (value.precio * second) + storageValue.totalValueItems
                        }
                        :
                        storageValue
                    sendStorage.push(storageValue)
                })
                this.localStorageValue = sendStorage;
            }
            else {
                this.localStorageValue.push({
                    infoItem: value,
                    totalItems: second,
                    totalValueItems: value.precio * second
                })
            }
            localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.localStorageValue)))
            toast.present();
        }
    }
}
