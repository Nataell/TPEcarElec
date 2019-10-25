import { IonicPageModule } from "ionic-angular";
import { NewRecipeBasisPage } from "./new-recipe-basis";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    NewRecipeBasisPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRecipeBasisPage),
  ],
})
export class NewRecipePageModule {}
