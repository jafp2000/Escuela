import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../../service/register.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  modalidad:any;

  constructor(private _service:RegisterService) { }

  ngOnInit() {
    this.modalidad = this._service.getModalidad();
  }

  finish(){
    alert("Bienvenido al curso!");
  }

}
