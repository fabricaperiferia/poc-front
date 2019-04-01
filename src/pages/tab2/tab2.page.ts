import { Component } from '@angular/core';
import { CatalogueService } from '../../service/catalogue.service'
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    catalogueList: Array<any> = [];
    searchTerm: String;
    localStorageValue:Array<any> = [];

    constructor(public catServ: CatalogueService, public loadingCtrl: LoadingController) {

    }

    /*
     Se listá los valores iniciales del catalogo
    */
    async ngOnInit() {
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
            console.log(err)
        })
    }

    /*
 Filtra por valores del item
*/
    async filterItems() {
        this.catServ.findFilter(this.searchTerm).then(response => {
            this.catalogueList = response.product
        }).catch(err => {
            console.log(err)
        })
    }

    addVal(value, second) {
        console.log(this.localStorageValue)
        this.localStorageValue.push({
            infoItem: value,
            totalItems: second === undefined ? 1 : second,
            totalValueItems: second === undefined ? value.precio : value.precio * second
        })
        localStorage.setItem("catalogueItems", btoa(JSON.stringify(this.localStorageValue)))
    }
}
