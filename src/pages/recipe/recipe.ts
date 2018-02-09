import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  constructor(public navCtrl: NavController) {

  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

}
