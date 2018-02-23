import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-single-recipe',
  templateUrl: 'single-recipe.html',
})

export class SingleRecipePage {

  constructor(public navCtrl: NavController) {
  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}
}
