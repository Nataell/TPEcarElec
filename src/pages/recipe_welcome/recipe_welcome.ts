import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';
import { NewRecipePage } from '../new-recipe/new-recipe';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe_welcome.html'
})
export class Recipe_WelcomePage {
	recipes: Array<{id: string, name: string, imgSrc: string, note: string, difficulty: string, duration: string}>;


  constructor(public navCtrl: NavController) {
		this.recipes = [
			{id: '1', name: "cookies", imgSrc: "http://ansnuclearcafe.org/wp-content/uploads/2012/12/cookie.gif", note: "4.5", difficulty: "Facile", duration: "35m"},
 			{id: '2', name: "brownies", imgSrc: "http://www.cookierecipes.com/wp-content/uploads/MMMMM...-Brownies.jpg", note: "3.8", difficulty: "Moyen", duration: "45m"},
			{id: '3', name: "tiramisu", imgSrc: "http://www.labonnecuisine.be/wp-content/uploads/2015/10/tiramisu.jpg", note: "2.9", difficulty: "Moyen", duration: "40m"},
			{id: '4', name: "pain Perdu", imgSrc: "http://www.recette-pain-perdu.fr/wp-content/uploads/2016/01/pain-perdu-a-la-poele-320x320.jpg", note: "3.5", difficulty: "Facile", duration: "20m"}
		];

  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

	goNewRecipe(){
		this.navCtrl.push(NewRecipePage);
	}

	showRecipe(recipeId){
		console.log("Clicked on recipe with id: "+recipeId);
	}
}
