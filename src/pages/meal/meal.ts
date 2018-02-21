import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {

  constructor(public navCtrl: NavController) {

  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

}
