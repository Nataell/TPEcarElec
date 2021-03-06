import { BasketPage } from "../basket/basket";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NewRecipeBasisPage } from "../new-recipe-basis/new-recipe-basis";

@Component({
  selector: "page-recipe-home",
  templateUrl: "recipe-home.html",
})

export class RecipeHomePage {
  public recipes: Array<{id: string, name: string, imgSrc: string, note: string, difficulty: string, duration: string}>;

  constructor(public navCtrl: NavController) {
    this.recipes = [
      {id: "1", name: "cookies", imgSrc: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-02.jpg", note: "4.5", difficulty: "Facile", duration: "35m"},
      {id: "2", name: "brownies", imgSrc: "http://www.cookierecipes.com/wp-content/uploads/MMMMM...-Brownies.jpg", note: "3.8", difficulty: "Moyen", duration: "45m"},
      {id: "3", name: "tiramisu", imgSrc: "http://www.labonnecuisine.be/wp-content/uploads/2015/10/tiramisu.jpg", note: "2.9", difficulty: "Moyen", duration: "40m"},
      {id: "4", name: "pain Perdu", imgSrc: "http://www.recette-pain-perdu.fr/wp-content/uploads/2016/01/pain-perdu-a-la-poele-320x320.jpg", note: "3.5", difficulty: "Facile", duration: "20m"},
    ];
  }

  public goBasket() {
    this.navCtrl.push(BasketPage);
  }

  public goNewRecipe() {
    this.navCtrl.push(NewRecipeBasisPage);
  }

  public showRecipe(recipeId) {
    console.log("Clicked on recipe with id: " + recipeId);
  }
}
