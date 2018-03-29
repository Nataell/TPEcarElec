import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRecipeIngredientsPage } from '../new-recipe-ingredients/new-recipe-ingredients';


/**
 * Generated class for the NewRecipePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-recipe-basis',
  templateUrl: 'new-recipe-basis.html',
})
export class NewRecipeBasisPage {
	useImage: boolean;
	m_ingredientList: Array<{name: string, quantity: string}>;
	m_stepList: Array<string>;

  constructor(public navCtrl: NavController) {
		this.useImage=false;
		this.m_stepList = [
			"beurrez votre tranche de pain", "étalez la tranche de jambon sur votre tranche de pain", "placez vos trois tranches de fromage de chevre sur votre tranche de jambon", "fermez votre croque madame avec l'autre tranche de pain de mie", "ajouter du gruilère sur le dessus", "Vous pouvez ajouter l'œuf sur le pain du dessus", "Enfournez pendant 7 minutes"
		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRecipePage');
  }

	goToIngredients() {
		console.log("change content to list ingredients");
    this.navCtrl.push(NewRecipeIngredientsPage,{},{animate:true,animation:'transition',duration:500,direction:'forward'});
	}
}
