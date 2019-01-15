import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-meal-view",
  templateUrl: "meal-view.html",
})
export class MealViewPage {

  private titlePage: string;
  private mealInfos: { imgSrc: string, imgTitle: string, seller: string, price: string, quantity: string, seasonMeal: boolean };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mealInfos = { imgSrc: "https://image.afcdn.com/recipe/20170112/28965_w1024h768c1cx1500cy1000.jpg", imgTitle: "CROQUE-MONSIEUR", seller: "Auchan", price: "0.0", quantity: "3", seasonMeal : true };
    this.titlePage = navParams.get("title");
  }

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }

}
