import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Recipe_WelcomePage } from '../pages/recipe_welcome/recipe_welcome';
import { ProductsPage } from '../pages/products/products';
import { ProductsListPage } from '../pages/products-list/products-list';
import { ProductsViewPage } from '../pages/products-view/products-view';
import { SettingsPage } from '../pages/settings/settings';
import { MealPage } from '../pages/meal/meal';
import { BasketPage } from '../pages/basket/basket';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';
import { NewRecipeBasisPage } from '../pages/new-recipe-basis/new-recipe-basis';
import { NewRecipeIngredientsPage } from '../pages/new-recipe-ingredients/new-recipe-ingredients';
import { NewRecipeStepsPage } from '../pages/new-recipe-steps/new-recipe-steps';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		Recipe_WelcomePage,
		ProductsPage,
		ProductsListPage,
		ProductsViewPage,
		SettingsPage,
		MealPage,
		BasketPage,
		SingleRecipePage,
		NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
    SettingsPage,
    AccountPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
		Recipe_WelcomePage,
		ProductsPage,
		ProductsListPage,
		ProductsViewPage,
		SettingsPage,
		MealPage,
		BasketPage,
		SingleRecipePage,
		NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
    SettingsPage,
    AccountPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
