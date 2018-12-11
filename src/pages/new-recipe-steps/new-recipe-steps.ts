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
  private stepList: [];
  private step: any;

  constructor(public navCtrl: NavController) {
    this.step = undefined;
    this.stepList = [
      "beurrez votre tranche de pain",
      "étalez la tranche de jambon sur votre tranche de pain",
      "placez vos trois tranches de fromage de chevre sur votre tranche de jambon",
      "fermez votre croque madame avec l'autre tranche de pain de mie",
      "ajouter du gruilère sur le dessus",
      "Vous pouvez ajouter l'œuf sur le pain du dessus",
      "Enfournez pendant 7 minutes",
    ];
  }

  public ionViewDidLoad() {
    this.navBar.backButtonClick = () => {
     this.navCtrl.pop({
       animate: true,
       animation: "transition",
       direction: "back",
       duration: 500,
     });
   };
  }

  private goToRecipeValidation() {
    console.log("validate recipe");
  }

  private addNewStep() {
    console.log("Adding new step");
    if (this.step) {
      const newStep = this.step;
      this.stepList.push(newStep);
      this.step = undefined;
    } else {
      console.log("invalid data");
      // display alert
    }
  }

  private removeStep(step) {
    const stepIndex = this.stepList.indexOf(step);
    this.stepList.splice(stepIndex, 1);
  }

  private modifyStep(step) {
    this.step = step;
    this.removeStep(step);
  }
}
