import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  constructor(public navCtrl: NavController) {

  }

	goSettings(){
		this.navCtrl.push(SettingsPage);
	}

}
