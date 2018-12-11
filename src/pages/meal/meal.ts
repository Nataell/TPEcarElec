import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { MealListPage } from "../meal-list/meal-list";
import { MealViewPage } from "../meal-view/meal-view";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-meal",
  templateUrl: "meal.html",
})
export class MealPage {

  private meals: Array<{ imgSrc: string, imgTitle: string, seller: string, price: string, seasonMeal: boolean }>;

  constructor(public navCtrl: NavController) {
    this.meals = [
      { imgSrc: "https://image.afcdn.com/recipe/20170112/28965_w1024h768c1cx1500cy1000.jpg", imgTitle: "CROQUE-MONSIEUR", seller: "Auchan", price: "0.0", seasonMeal : true },
      { imgSrc: "https://chefcuisto.com/files/2017/05/salade-patates-bacon-624x541.jpg", imgTitle: "SALADE DE PATATES", seller: "Auchan", price: "0.0", seasonMeal : true },
      { imgSrc: "http://static.pratico-pratiques.com/uploads/images/recipe/orig/dbcd14d205b9b2447db0414781f91879/hamburger-vegetarien-aux-haricots-blancs.jpeg", imgTitle: "HAMBURGER VÉGÉ", seller: "Auchan", price: "0.0", seasonMeal : true },
      { imgSrc: "https://static.cuisineaz.com/400x320/i71303-recette-pate-spaghettis-bolognaise-maison.jpg", imgTitle: "SPAGUETTI BOLOGNAISE", seller: "Auchan", price: "0.0", seasonMeal : true },
      { imgSrc: "http://assets.kraftfoods.com/recipe_images/opendeploy/124046-79ffeaf4256ab8c9b743cbfb071084dc1c01548d_642x428.jpg", imgTitle: "SALADES DE LÉGUMES", seller: "Auchan", price: "0.0", seasonMeal : true },
    ];
  }

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }

  public goNewMeal(namePage) {
    console.log("Les nouveaux repas.");
    this.navCtrl.push((MealListPage), {
      title: namePage,
    });
  }

  public goSeasonProduct() {
    console.log("Les repas de saisons.");
  }

  public goAllProduct() {
    console.log("Tout les repas.");
  }

  public goSingleMeal(mealName) {
    console.log(mealName);
    this.navCtrl.push((MealViewPage), {
      title: mealName,
    });
  }
}
