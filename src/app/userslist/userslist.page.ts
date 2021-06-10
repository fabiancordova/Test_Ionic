import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.page.html",
  styleUrls: ["./userslist.page.scss"],
})
export class UserslistPage implements OnInit {
  characters = [];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http
      .get<any>("https://private-anon-7823d45bfd-testphonebook.apiary-mock.com/persona")
      .subscribe((res) => {
        //console.log('res: ',res);
        this.characters = res;
      });
  }
}
