import { Component, ViewChild } from "@angular/core";
import { Navbar, NavController } from "ionic-angular";
import { NewRecipeStepsPage } from "../new-recipe-steps/new-recipe-steps";

@Component({
  selector: "page-new-recipe-ingredients",
  templateUrl: "new-recipe-ingredients.html",
})
export class NewRecipeIngredientsPage {
  // NavBar is use to implement the back button
  @ViewChild(Navbar) navBar: Navbar;
  private ingredientList: Array<{name: string, quantity: string}>;
  private ingredient = {name: null, quantity: null};

  constructor(public navCtrl: NavController) {
    // static ingredient list just to use UI
    this.ingredientList = [
      {name: "Pain de mie", quantity: "2 tranches"},
      {name: "Œufs", quantity: "1"},
      {name: "Jambon", quantity: "1 tranche"},
      {name: "fromage de chevre", quantity: "3 tranches"},
      {name: "gruillère rapé", quantity: "50 g"},
    ];
  }

  public ionViewDidLoad() {
    // when load this page, implement the back button functionnality
    this.navBar.backButtonClick = () => {
      this.navCtrl.pop( {
        animate: true,
        animation: "transition",
        // slide the page from the left to right when we want to go back
        direction: "back",
        duration: 500,
      });
    };
  }

  private goSteps() {
    this.navCtrl.push(
      NewRecipeStepsPage,
      {},
      {
        animate: true,
        animation: "transition",
        // slide the page from the right to left
        direction: "forward",
        duration: 500,
      },
    );
  }

  private addIngredients() {
    console.log("Adding new ingredient");
    if (this.ingredient.name && this.ingredient.quantity) {
      const newIngredient = {name: this.ingredient.name, quantity: this.ingredient.quantity};
      this.ingredientList.push(newIngredient);
      this.ingredient.name = "";
      this.ingredient.quantity = "";
    } else {
      console.log("All data are not filled");
    }
  }

  private deleteIngredient(ingredient) {
    console.log(ingredient);
    const ingredientIndex = this.ingredientList.indexOf(ingredient);
    this.ingredientList.splice(ingredientIndex, 1);
  }

  /**
  When we want to modify an ingredient, we simply use the UI already made:
  We put the informations in the two fields for ingredients and we delete it from list
  */
  private modifyIngredient(ingredient) {
    this.ingredient.name = ingredient.name;
    this.ingredient.quantity = ingredient.quantity;
    this.deleteIngredient(ingredient);
  }
}
