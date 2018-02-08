import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html'
})
export class MealPage {

  constructor(public navCtrl: NavController) {

  }

	goSettings(){
		this.navCtrl.push(SettingsPage);
	}

}
