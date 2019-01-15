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
import { MealPage } from "../pages/meal/meal";
import { MealViewPage } from "../pages/meal-view/meal-view";
import { MyApp } from "./app.component";
import { NewRecipeBasisPage } from "../pages/new-recipe-basis/new-recipe-basis";
import { NewRecipeIngredientsPage } from "../pages/new-recipe-ingredients/new-recipe-ingredients";
import { NewRecipeStepsPage } from "../pages/new-recipe-steps/new-recipe-steps";
import { ProductHomePage } from "../pages/product-home/product-home";
import { ProductsListPage } from "../pages/products-list/products-list";
import { ProductsViewPage } from "../pages/products-view/products-view";
import { Recipe_WelcomePage } from "../pages/recipe_welcome/recipe_welcome";
import { SingleRecipePage } from "../pages/single-recipe/single-recipe";
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
    MealPage,
    MyApp,
    MealListPage,
    MealViewPage,
    NewRecipeBasisPage,
    NewRecipeIngredientsPage,
    NewRecipeStepsPage,
    ProductsListPage,
    ProductHomePage,
    ProductsViewPage,
    Recipe_WelcomePage,
    SingleRecipePage,
  ],
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
    ProductHomePage,
    ProductsListPage,
    ProductsViewPage,
    Recipe_WelcomePage,
    MealListPage,
    MealViewPage,
    SingleRecipePage,
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
