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
import { MealPage } from '../pages/meal/meal';
import { MealListPage } from '../pages/meal-list/meal-list';
import { MealViewPage } from '../pages/meal-view/meal-view';
import { BasketPage } from '../pages/basket/basket';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';
import { NewRecipeBasisPage } from '../pages/new-recipe-basis/new-recipe-basis';
import { NewRecipeIngredientsPage } from '../pages/new-recipe-ingredients/new-recipe-ingredients';
import { NewRecipeStepsPage } from '../pages/new-recipe-steps/new-recipe-steps';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AccountCreationPage } from '../pages/account-creation/account-creation';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    AccountPage,
    AccountCreationPage,
		BasketPage,
    HomePage,
    LoginPage,
		MealPage,
		MyApp,
		MealListPage,
		MealViewPage,
    MyApp,
		BasketPage,
		SingleRecipePage,
		NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
		ProductsListPage,
		ProductsPage,
		ProductsViewPage,
		Recipe_WelcomePage,
    // SettingsPage,
		SingleRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountCreationPage,
    AccountPage,
		BasketPage,
    HomePage,
    LoginPage,
		MealPage,
    MyApp,
		NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
		ProductsPage,
		ProductsListPage,
		ProductsViewPage,
    Recipe_WelcomePage,
		MealPage,
		MealListPage,
		MealViewPage,
		BasketPage,
		SingleRecipePage,
		NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage
  ],
  providers: [
    AuthServiceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
