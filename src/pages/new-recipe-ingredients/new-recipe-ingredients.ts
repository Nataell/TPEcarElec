import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';
import { NewRecipeStepsPage } from '../new-recipe-steps/new-recipe-steps';

/**
 * Generated class for the NewRecipeIngredientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-recipe-ingredients',
  templateUrl: 'new-recipe-ingredients.html',
})
export class NewRecipeIngredientsPage {
  m_ingredientList: Array<{name: string, quantity: string}>;
  @ViewChild(Navbar) navBar: Navbar;
  m_ingredient = {name : null, quantity : null};

  constructor(public navCtrl: NavController) {
    this.m_ingredientList = [
      {name: "Pain de mie", quantity: "2 tranches"},
      {name: "Œufs", quantity: "1"},
      {name: "Jambon", quantity: "1 tranche"},
      {name: "fromage de chevre", quantity: "3 tranches"},
      {name: "gruillère rapé", quantity: "50 g"}
    ];
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () =>{
     this.navCtrl.pop({animate:true,animation:'transition',duration:500,direction:'back'});
    }
  }

  goToSteps() {
    this.navCtrl.push(NewRecipeStepsPage,{},{animate:true,animation:'transition',duration:500,direction:'forward'});
  }

  addNewIngredient(){
    console.log("Adding new ingredient");
    if(this.m_ingredient.name && this.m_ingredient.quantity){
      var new_ingredient = {name: this.m_ingredient.name, quantity: this.m_ingredient.quantity};
      this.m_ingredientList.push(new_ingredient);
      this.m_ingredient.name = "";
      this.m_ingredient.quantity = "";
    }
    else{
      console.log("invalid data");
      //display alert
    }
  }


  deleteIngredient(ingredient){
    console.log(ingredient);
    var ingredientIndex = this.m_ingredientList.indexOf(ingredient);
    this.m_ingredientList.splice(ingredientIndex,1);
  }

  modifyIngredient(ingredient){
    this.m_ingredient.name = ingredient.name;
    this.m_ingredient.quantity = ingredient.quantity;
    this.deleteIngredient(ingredient);
  }
}
