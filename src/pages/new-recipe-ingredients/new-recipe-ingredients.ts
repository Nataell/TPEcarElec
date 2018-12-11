import { Component, ViewChild } from "@angular/core";
import { Navbar, NavController } from "ionic-angular";
import { NewRecipeStepsPage } from "../new-recipe-steps/new-recipe-steps";

/**
 * Generated class for the NewRecipeIngredientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-new-recipe-ingredients",
  templateUrl: "new-recipe-ingredients.html",
})
export class NewRecipeIngredientsPage {
  @ViewChild(Navbar) navBar: Navbar;
  private ingredientList: Array<{name: string, quantity: string}>;
  private ingredient = {name: null, quantity: null};

  constructor(public navCtrl: NavController) {
    this.ingredientList = [
      {name: "Pain de mie", quantity: "2 tranches"},
      {name: "Œufs", quantity: "1"},
      {name: "Jambon", quantity: "1 tranche"},
      {name: "fromage de chevre", quantity: "3 tranches"},
      {name: "gruillère rapé", quantity: "50 g"},
    ];
  }

  public ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.pop( {
        animate: true,
        animation: "transition",
        direction: "back",
        duration: 500,
      });
    };
  }

  private goToSteps() {
    this.navCtrl.push(
      NewRecipeStepsPage,
      {},
      {
        animate: true,
        animation: "transition",
        direction: "forward",
        duration: 500,
      },
    );
  }

  private addNewIngredient() {
    console.log("Adding new ingredient");
    if (this.ingredient.name && this.ingredient.quantity) {
      const newIngredient = {name: this.ingredient.name, quantity: this.ingredient.quantity};
      this.ingredientList.push(newIngredient);
      this.ingredient.name = "";
      this.ingredient.quantity = "";
    } else {
      console.log("invalid data");
      // display alert
    }
  }

  private deleteIngredient(ingredient) {
    console.log(ingredient);
    const ingredientIndex = this.ingredientList.indexOf(ingredient);
    this.ingredientList.splice(ingredientIndex, 1);
  }

  private modifyIngredient(ingredient) {
    this.ingredient.name = ingredient.name;
    this.ingredient.quantity = ingredient.quantity;
    this.deleteIngredient(ingredient);
  }
}
