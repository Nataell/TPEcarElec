import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewRecipeIngredientsPage } from '../new-recipe-ingredients/new-recipe-ingredients';


/**
 * Generated class for the NewRecipePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-recipe-basis',
  templateUrl: 'new-recipe-basis.html',
})
export class NewRecipeBasisPage {
	useImage: boolean;
  useLink: boolean;

  constructor(public navCtrl: NavController) {
		this.useImage=false;
    this.useLink=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRecipePage');
  }

	goToIngredients() {
		console.log("change content to list ingredients");
    this.navCtrl.push(NewRecipeIngredientsPage,{},{animate:true,animation:'transition',duration:500,direction:'forward'});
	}

  showLinkInput() {
    console.log("Show link input");
    this.
  }
}
