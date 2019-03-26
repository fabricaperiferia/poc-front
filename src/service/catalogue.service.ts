import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'




@Injectable()
export class CatalogueService {

  valor:Array<any> = [ ]

  constructor(
    private _http: HttpClient
  ) {}

  findAll(): Promise<any> {
    return this._http.get('http://localhost:3000/catalogue').toPromise().then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }


}
