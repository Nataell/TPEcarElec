import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-single-recipe',
  templateUrl: 'single-recipe.html',
})

export class SingleRecipePage {
	m_recipeInfo: {name: string, imgUrl: string, author: string, people: string, time: string, difficulty: string, priceCat: string};
	ingredientList: Array<{name: string, quantity: string}>;
	m_stepList: Array<string>;

  constructor(public navCtrl: NavController) {
		this.m_recipeInfo = {name: "Croque Madame", imgUrl: "https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-0.3.5&s=7ec7b3d5920bc7476bf497f34e91413b&auto=format&fit=crop&w=711&q=80", author: "EggMan", people: "1", time: "15", difficulty: "Facile", priceCat: "Bon Marché"};
		this.ingredientList = [
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

	goBasket(){
		this.navCtrl.push(BasketPage);
	}
}
