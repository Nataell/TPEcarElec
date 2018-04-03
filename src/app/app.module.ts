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
import { MealListPage } from '../pages/meal-list/meal-list';
import { MealViewPage } from '../pages/meal-view/meal-view';
import { BasketPage } from '../pages/basket/basket';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';
import { NewRecipePage } from '../pages/new-recipe/new-recipe';

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
		MealListPage,
		MealViewPage,
		BasketPage,
		SingleRecipePage,
		NewRecipePage
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
		MealListPage,
		MealViewPage,
		BasketPage,
		SingleRecipePage,
		NewRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
