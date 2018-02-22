import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe_welcome.html'
})
export class Recipe_WelcomePage {
	recipes: Array<{name: string, imgSrc: string}>;

  constructor(public navCtrl: NavController) {
		this.recipes = [
			{ name: "cookies", imgSrc: "http://ansnuclearcafe.org/wp-content/uploads/2012/12/cookie.gif"},
 			{name: "brownies", imgSrc: "http://www.cookierecipes.com/wp-content/uploads/MMMMM...-Brownies.jpg"},
			{name: "tiramisu", imgSrc: "http://www.labonnecuisine.be/wp-content/uploads/2015/10/tiramisu.jpg"},
			{name: "pain Perdu", imgSrc: "http://www.recette-pain-perdu.fr/wp-content/uploads/2016/01/pain-perdu-a-la-poele-320x320.jpg"}
		];
  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}
}
