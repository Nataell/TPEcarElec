import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html'
})
export class BasketPage {

  constructor(public navCtrl: NavController) {

  }

	goSettings(){
		this.navCtrl.push(SettingsPage);
	}

}
