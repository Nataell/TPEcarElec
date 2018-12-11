import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewRecipeStepsPage } from "./new-recipe-steps";

@NgModule({
  declarations: [
    NewRecipeStepsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRecipeStepsPage),
  ],
})
export class NewRecipeStepsPageModule {}
