import { Component, ViewChild } from "@angular/core";
import { Navbar, NavController } from "ionic-angular";


/**
 * Generated class for the NewRecipeStepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-new-recipe-steps",
  templateUrl: "new-recipe-steps.html",
})
export class NewRecipeStepsPage {
  @ViewChild(Navbar) navBar: Navbar;
  private m_stepList: Array<string>;
  private m_step;

  constructor(public navCtrl: NavController) {
    this.m_step = "";
    this.m_stepList = [
      "beurrez votre tranche de pain",
      "étalez la tranche de jambon sur votre tranche de pain",
      "placez vos trois tranches de fromage de chevre sur votre tranche de jambon",
      "fermez votre croque madame avec l'autre tranche de pain de mie",
      "ajouter du gruilère sur le dessus",
      "Vous pouvez ajouter l'œuf sur le pain du dessus",
      "Enfournez pendant 7 minutes",
    ];
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = () =>{
     this.navCtrl.pop({animate:true,animation:'transition',duration:500,direction:'back'});
    }
  }

  goToRecipeValidation() {
    console.log("validate recipe")
  }

  addNewStep(){
    console.log("Adding new step");
    if(this.m_step!=""){
      var new_step = this.m_step;
      this.m_stepList.push(new_step);
      this.m_step = "";
    }
    else{
      console.log("invalid data");
      //display alert
    }
  }

  removeStep(step){
    var stepIndex = this.m_stepList.indexOf(step);
    this.m_stepList.splice(stepIndex,1);
  }

  modifyStep(step){
    this.m_step = step;
    this.removeStep(step);
  }
}
