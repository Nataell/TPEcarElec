import { Component, ViewChild } from "@angular/core";
import { Navbar, NavController } from "ionic-angular";

@Component({
  selector: "page-new-recipe-steps",
  templateUrl: "new-recipe-steps.html",
})
export class NewRecipeStepsPage {
  @ViewChild(Navbar) navBar: Navbar;
  private stepList: Array<string>;
  private currentStep;

  constructor(public navCtrl: NavController) {
    this.currentStep = "";
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
       animate:true,
       animation:'transition',
       duration:500,
       direction:'back',
     });
    }
  }

  public goToRecipeValidation() {
    console.log("validate recipe")
  }

  public addStep(){
    console.log("Adding new step");
    if(this.currentStep!=""){
      const newStep = this.currentStep;
      this.stepList.push(newStep);
      this.currentStep = "";
    }
    else{
      console.log("invalid data");
      //display alert
    }
  }

  public removeStep(step){
    var stepIndex = this.stepList.indexOf(step);
    this.stepList.splice(stepIndex,1);
  }

  /**
  To modify a step, we use the existing UI. We put informations we want to
  modify on the existing field and we delete it from the list.
  */
  public modifyStep(step){
    this.currentStep = step;
    this.removeStep(step);
  }
}
