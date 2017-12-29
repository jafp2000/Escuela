import { Component, OnInit, Pipe } from '@angular/core';
import { RegisterService } from '../../../../service/register.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  modalidad:any;
  inicio:Date;
  fin:Date;
  categoria:string = "1";

  constructor(private _service:RegisterService) { }

  ngOnInit() {
    this.modalidad = this._service.getModalidad();
    this.inicio = new Date(this.modalidad.fecha_inicio);
    this.fin = new Date(this.modalidad.fecha_fin);
    let temp = this._service.getDataSeleccionada();
    this.categoria = temp.categoria;
  }

}
