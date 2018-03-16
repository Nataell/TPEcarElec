import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRecipeBasisPage } from './new-recipe-basis';

@NgModule({
  declarations: [
    NewRecipeBasisPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRecipeBasisPage),
  ],
})
export class NewRecipePageModule {}
