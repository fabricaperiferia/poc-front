import { Component } from '@angular/core';
import { CatalogueService } from '../../service/catalogue.service'


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    catalogueList: Array<any> = []

    constructor(public catServ: CatalogueService) {

    }
    ngOnInit() {
        this.catServ.findAll().then(response => {
            console.log(response.product)
            this.catalogueList = response.product
        }).catch(err => {
            console.log(err)
        })

    }


}
