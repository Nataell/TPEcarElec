import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-products-view",
  templateUrl: "products-view.html",
})

export class ProductsViewPage {

  public titlePage: string;
  public productSingle: { imgSrc: string, imgTitle: string, seller: string, price: string, quantity: string, seasonProduct: boolean };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productSingle = { imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", imgTitle: "TOMATES", seller: "Auchan", price: "0.0", quantity: "4", seasonProduct: true };
    this.titlePage = navParams.get("title");
  }

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }

}
