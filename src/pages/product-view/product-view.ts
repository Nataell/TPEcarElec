import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-product-view",
  templateUrl: "product-view.html",
})

export class ProductViewPage {

  public titlePage: string;
  public productInfos: { imgSrc: string, imgTitle: string, seller: string, price: string, quantity: string, seasonProduct: boolean };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productInfos = { imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", imgTitle: "TOMATES", seller: "Auchan", price: "0.0", quantity: "4", seasonProduct: true };
    this.titlePage = navParams.get("title");
  }

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }

}
