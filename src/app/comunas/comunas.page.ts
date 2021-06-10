import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-comunas',
  templateUrl: './comunas.page.html',
  styleUrls: ['./comunas.page.scss'],
})
export class ComunasPage implements OnInit {
  profileId: string;
  indice: number;
  comunas;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
    this.indice = parseInt(this.profileId) - 1;
    this.http
      .get<any>("https://private-anon-7823d45bfd-testphonebook.apiary-mock.com/region")
      .subscribe((res) => {
        this.comunas = res[this.indice];
      });
  }
}
