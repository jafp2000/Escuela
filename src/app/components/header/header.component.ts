import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  test(){
    var text = $('.titleTest').text();
    console.log('texto: ' + text);
    //NO ESTA HACIENDO NADA
    $.soap({
      url:"http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL",
      method:"getCiudades",
      HTTPHeaders:{
        'Content-Type': 'application/xml',
        'Server-Protocol': 'SOAP'
      },
      success: function (response) {
        console.log('funciono')
      },
      error: function (response){
        console.log('error')
      }
    });
    //LO REBOTAN LOS PERMISOS 
    const headers = new HttpHeaders()
            .set("Content-Type", "application/xml")
            .set("Server-Protocol", "SOAP");
    this.http.get('http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL', {headers})
    .subscribe(data => {
      console.log('llego');
    });
  }

}
