import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe_welcome.html'
})
export class Recipe_WelcomePage {
	recipes: Array<{name: string, imgSrc: string}>;

  constructor(public navCtrl: NavController) {
		this.recipes = { name: "cookies", imgSrc: ""}
  }

	goSettings(){
		this.navCtrl.push(SettingsPage);
	}

}
