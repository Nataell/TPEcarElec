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
import { NewRecipePage } from '../pages/new-recipe/new-recipe';

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
      	{ title: 'Accueil', component: HomePage, icon: 'home'},
				{ title: 'Recettes', component: Recipe_WelcomePage, icon: 'bookmarks'},
				{ title: 'Produits', component: ProductsPage, icon: 'nutrition'},
				{ title: 'Repas', component: MealPage, icon: 'restaurant'},
				{ title: 'Paramètres', component: SettingsPage, icon: 'settings'},
				{ title: 'RecetteTest', component: SingleRecipePage, icon: 'cart'}
    	];

    });
  }

	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
