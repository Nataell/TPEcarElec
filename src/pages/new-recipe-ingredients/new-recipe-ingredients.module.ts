import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRecipeIngredientsPage } from './new-recipe-ingredients';

@NgModule({
  declarations: [
    NewRecipeIngredientsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewRecipeIngredientsPage),
  ],
})
export class NewRecipeIngredientsPageModule {}
