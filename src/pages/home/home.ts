import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})

export class HomePage {

  constructor(public navCtrl: NavController) {}

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }
}
