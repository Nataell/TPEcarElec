import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { Badge } from '@ionic-native/badge';

import { HomePage } from '../pages/home/home';
import { Recipe_WelcomePage } from '../pages/recipe_welcome/recipe_welcome';
import { ProductsPage } from '../pages/products/products';
import { MealPage } from '../pages/meal/meal';
import { SettingsPage } from '../pages/settings/settings';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';
import { NewRecipeBasisPage } from '../pages/new-recipe-basis/new-recipe-basis';
import { NewRecipeIngredientsPage } from '../pages/new-recipe-ingredients/new-recipe-ingredients';
import { NewRecipeStepsPage } from '../pages/new-recipe-steps/new-recipe-steps';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AccountCreationPage } from '../pages/account-creation/account-creation';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
	@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
	pages: Array<{title: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/*, badge: Badge*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#007713');
			statusBar.show();
      splashScreen.hide();

			//this.badge.set(5);

			this.pages = [
<<<<<<< HEAD
<<<<<<< HEAD
      	{ title: 'Accueil', component: HomePage, icon: 'home', numberBadge: "7" },
				{ title: 'Recettes', component: Recipe_WelcomePage, icon: 'bookmarks', numberBadge: "7" },
				{ title: 'Produits', component: ProductsPage, icon: 'nutrition', numberBadge: "7" },
				{ title: 'Repas', component: MealPage, icon: 'restaurant', numberBadge: "7" },
				{ title: 'Panier', component: BasketPage, icon: 'cart', numberBadge: "7" }
=======
      	{ title: 'Accueil', component: HomePage, icon: 'home' },
				{ title: 'Recettes', component: RecipePage, icon: 'bookmarks' },
				{ title: 'Produits', component: ProductsPage, icon: 'nutrition' },
				{ title: 'Repas', component: MealPage, icon: 'restaurant' },
				{ title: 'Paramètres', component: SettingsPage, icon: 'settings' }
>>>>>>> 48b4af2... Change the main view the cart item. Remove padding in the products to have a better view.
=======
      	{ title: 'Accueil', component: HomePage, icon: 'home'},
				{ title: 'Recettes', component: Recipe_WelcomePage, icon: 'bookmarks'},
				{ title: 'Produits', component: ProductsPage, icon: 'nutrition'},
				{ title: 'Repas', component: MealPage, icon: 'restaurant'},
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
				{ title: 'Panier', component: BasketPage, icon: 'cart'}
>>>>>>> 16f768e... Modify recipe ui
=======
=======
>>>>>>> 3733981... Basket is finish, some css change must be discuss.
=======
>>>>>>> 1a526c7... UNIFORMISE : recipe_welcome
				{ title: 'Panier', component: BasketPage, icon: 'cart'},
<<<<<<< HEAD
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'cart'}
>>>>>>> 1a1db1c... Improve recipe ui. Add some colors on src/theme/variables to fit with material design. Add a new page to test a single recipe design
=======
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'alert'},
<<<<<<< HEAD
        { title: 'ListeRecipe', component: SingleRecipePage, icon: 'alert'}
>>>>>>> 25c3f95... Add different page for recipe creation and improve UI
=======
        { title: 'ListeRecipe', component: SingleRecipePage, icon: 'alert'},
        { title: 'Compte', component: AccountPage, icon: 'contact'},
        { title: 'Paramètres', component: SettingsPage, icon: 'settings'}
<<<<<<< HEAD
>>>>>>> 9b2c160... Add setting, login, signin and account pages
=======
=======
				{ title: 'Paramètres', component: SettingsPage, icon: 'settings'},
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'cart'}
>>>>>>> 1d7f703... Basket is finish, some css change must be discuss.
<<<<<<< HEAD
>>>>>>> 3733981... Basket is finish, some css change must be discuss.
=======
=======
				{ title: 'Paramètres', component: SettingsPage, icon: 'settings'},
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'alert'},
        { title: 'ListeRecipe', component: SingleRecipePage, icon: 'alert'}
>>>>>>> bbe51c8... UNIFORMISE : recipe_welcome
>>>>>>> 1a526c7... UNIFORMISE : recipe_welcome
    	];

    });
  }

	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
