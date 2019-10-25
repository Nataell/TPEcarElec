import { AccountCreationPage } from "../pages/account-creation/account-creation";
import { AccountPage } from "../pages/account/account";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { BasketPage } from "../pages/basket/basket";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { MealListPage } from "../pages/meal-list/meal-list";
import { MealHomePage } from "../pages/meal-home/meal-home";
import { MealViewPage } from "../pages/meal-view/meal-view";
import { MyApp } from "./app.component";
import { NewRecipeBasisPage } from "../pages/new-recipe-basis/new-recipe-basis";
import { NewRecipeIngredientsPage } from "../pages/new-recipe-ingredients/new-recipe-ingredients";
import { NewRecipeStepsPage } from "../pages/new-recipe-steps/new-recipe-steps";
import { ProductHomePage } from "../pages/product-home/product-home";
import { ProductListPage } from "../pages/product-list/product-list";
import { ProductViewPage } from "../pages/product-view/product-view";
import { RecipeHomePage } from "../pages/recipe-home/recipe-home";
import { RecipeViewPage } from "../pages/recipe-view/recipe-view";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    AccountPage,
    AccountCreationPage,
    BasketPage,
    HomePage,
    LoginPage,
    MealHomePage,
    MyApp,
    MealListPage,
    MealViewPage,
    NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
    ProductListPage,
    ProductHomePage,
    ProductViewPage,
    RecipeHomePage,
    RecipeViewPage,
  ],
  entryComponents: [
    AccountCreationPage,
    AccountPage,
    BasketPage,
    HomePage,
    LoginPage,
    MealHomePage,
    MyApp,
    NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
    ProductHomePage,
    ProductListPage,
    ProductViewPage,
    RecipeHomePage,
    MealListPage,
    MealViewPage,
    RecipeViewPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  providers: [
    AuthServiceProvider,
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
})
export class AppModule {}
