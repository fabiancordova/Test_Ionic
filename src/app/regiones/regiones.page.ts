import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.page.html',
  styleUrls: ['./regiones.page.scss'],
})
export class RegionesPage implements OnInit {
  regiones = [];

  constructor(private http: HttpClient) {}

  //obtención de lista de regiones
  async ngOnInit() {
    this.http
      .get<any>("https://private-anon-7823d45bfd-testphonebook.apiary-mock.com/region")
      .subscribe((res) => {
        //console.log('res: ',res)
        this.regiones = res;
      });
  }
}
