import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { User } from '../providers/auth-service/auth-service';


//import { Badge } from '@ionic-native/badge';

import { HomePage } from '../pages/home/home';
import { Recipe_WelcomePage } from '../pages/recipe_welcome/recipe_welcome';
import { ProductsPage } from '../pages/products/products';
import { MealPage } from '../pages/meal/meal';
// import { SettingsPage } from '../pages/settings/settings';
import { SingleRecipePage } from '../pages/single-recipe/single-recipe';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AccountCreationPage } from '../pages/account-creation/account-creation';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  test: any;
	@ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
	pages: Array<{title: string, component: any, icon: string }>;
  loggedInPages: Array<{ title: string, component: any, icon: string }>;
  loggedOutPages: Array<{ title: string, component: any, icon: string }>;
  connected: boolean;
  developmentState: true;
  credentials = {email: '', pass: ''};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController, private auth: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#007713');
			statusBar.show();
      splashScreen.hide();
      var test = this.auth.getUser();
      if(test!=null){
        this.credentials.email = test.email;
        this.credentials.pass = test.pass;
      }
      if(this.credentials.email != '' && this.credentials.pass != ''){
        this.connected = true;
      }
      else{
        this.connected = false;
      }
      this.auth.login(this.credentials).subscribe(allowed => {
        if(allowed){
          this.refreshMenu();
        }
      });
      this.refreshMenu();
    });
  }

	openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  logOut() {
    this.auth.logout().subscribe(allowed => {
      if(allowed){
        this.connected = false;
        this.refreshMenu();
      }
      else{
        //show disconnection error
      }
    });
  }

  refreshMenu() {
    this.pages = [
      { title: 'Accueil', component: HomePage, icon: 'home'},
      { title: 'Recettes', component: Recipe_WelcomePage, icon: 'bookmarks'},
      { title: 'Produits', component: ProductsPage, icon: 'nutrition'},
      { title: 'Repas', component: MealPage, icon: 'restaurant'}
    ];
    if(this.connected){
      this.pages.push({ title: 'Mon Compte', component: AccountPage, icon: 'contact'});
    }
    else{
      this.pages.push({ title: 'Connexion', component: LoginPage, icon: 'log-in' });
      this.pages.push({ title: 'Créer un compte', component: AccountCreationPage, icon: 'create' });
    }
    if(this.developmentState){
      this.pages.push({ title: 'RecetteTest', component: SingleRecipePage, icon: 'alert'});
    }
  }

  showLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Se déconnecter?',
      message: 'Voulez vous vraiment vous déconnecter?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Agree clicked');
            this.logOut();
          }
        }
      ]
    });
    confirm.present();
  }
}
