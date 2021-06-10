import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profileId: string;
  indice: number;
  persona;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get("id");
    this.indice = parseInt(this.profileId) - 1;
    this.http
      .get<any>("https://private-anon-7823d45bfd-testphonebook.apiary-mock.com/persona")
      .subscribe((res) => {
        this.persona = res[this.indice];
      });
  }
}
