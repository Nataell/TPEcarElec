import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { Badge } from '@ionic-native/badge';

import { HomePage } from '../pages/home/home';
import { Recipe_WelcomePage } from '../pages/recipe_welcome/recipe_welcome';
import { ProductsPage } from '../pages/products/products';
import { MealPage } from '../pages/meal/meal';
import { BasketPage } from '../pages/basket/basket';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

	@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
	pages: Array<{title: string, component: any, icon: string, numberBadge: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen/*, badge: Badge*/) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

			//this.badge.set(5);

			this.pages = [
      	{ title: 'Accueil', component: HomePage, icon: 'home', numberBadge: "7" },
				{ title: 'Recettes', component: Recipe_WelcomePage, icon: 'bookmarks', numberBadge: "7" },
				{ title: 'Produits', component: ProductsPage, icon: 'nutrition', numberBadge: "7" },
				{ title: 'Repas', component: MealPage, icon: 'restaurant', numberBadge: "7" },
				{ title: 'Panier', component: BasketPage, icon: 'cart', numberBadge: "7" }
    	];

    });
  }

	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
