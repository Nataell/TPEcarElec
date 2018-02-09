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
		this.recipes = { name: "cookies", imgSrc: ""}
  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

}
