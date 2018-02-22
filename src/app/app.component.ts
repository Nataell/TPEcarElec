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
import { BasketPage } from '../pages/basket/basket';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';

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
				{ title: 'Panier', component: BasketPage, icon: 'cart'}
>>>>>>> 16f768e... Modify recipe ui
=======
				{ title: 'Panier', component: BasketPage, icon: 'cart'},
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'cart'}
>>>>>>> 1a1db1c... Improve recipe ui. Add some colors on src/theme/variables to fit with material design. Add a new page to test a single recipe design
    	];

    });
  }

	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
