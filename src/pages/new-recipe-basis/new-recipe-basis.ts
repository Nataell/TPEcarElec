import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NewRecipeIngredientsPage } from "../new-recipe-ingredients/new-recipe-ingredients";

/**
 * Generated class for the NewRecipePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-new-recipe-basis",
  templateUrl: "new-recipe-basis.html",
})

export class NewRecipeBasisPage {
  private useImage: boolean;
  private useLink: boolean;

  constructor(public navCtrl: NavController) {
    this.useImage = false;
    this.useLink = false;
  }

  public ionViewDidLoad() {
    console.log("ionViewDidLoad NewRecipePage");
  }

  public goIngredients() {
    console.log("change content to list ingredients");
    this.navCtrl.push( NewRecipeIngredientsPage,
      {},
      {
        animate: true,
        animation: "transition",
        direction: "forward",
        duration: 500,
      },
    );
  }
}
