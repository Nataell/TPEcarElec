import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar } from 'ionic-angular';


/**
 * Generated class for the NewRecipeStepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-recipe-steps',
  templateUrl: 'new-recipe-steps.html',
})
export class NewRecipeStepsPage {
  m_stepList: Array<string>;
  @ViewChild(Navbar) navBar: Navbar;

  constructor(public navCtrl: NavController) {
    this.m_stepList = [
      "beurrez votre tranche de pain", "étalez la tranche de jambon sur votre tranche de pain", "placez vos trois tranches de fromage de chevre sur votre tranche de jambon", "fermez votre croque madame avec l'autre tranche de pain de mie", "ajouter du gruilère sur le dessus", "Vous pouvez ajouter l'œuf sur le pain du dessus", "Enfournez pendant 7 minutes"
    ];
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () =>{
     this.navCtrl.pop({animate:true,animation:'transition',duration:500,direction:'back'});
    }
  }

}