import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
export class NewRecipePage {
	useImage: boolean;
	m_ingredientList: Array<{name: string, quantity: string}>;
	m_stepList: Array<string>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.useImage=false;
		this.m_ingredientList = [
			{name: "Pain de mie", quantity: "2 tranches"},
			{name: "Œufs", quantity: "1"},
			{name: "Jambon", quantity: "1 tranche"},
			{name: "fromage de chevre", quantity: "3 tranches"},
			{name: "gruillère rapé", quantity: "50 g"}
		];
		this.m_stepList = [
			"beurrez votre tranche de pain", "étalez la tranche de jambon sur votre tranche de pain", "placez vos trois tranches de fromage de chevre sur votre tranche de jambon", "fermez votre croque madame avec l'autre tranche de pain de mie", "ajouter du gruilère sur le dessus", "Vous pouvez ajouter l'œuf sur le pain du dessus", "Enfournez pendant 7 minutes"
		];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRecipePage');
  }

}
