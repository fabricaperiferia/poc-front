import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})

export class ModalComponent {
  
  constructor(public router: Router) {
  }

}