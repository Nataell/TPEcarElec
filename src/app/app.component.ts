import { AlertController, Nav, Platform } from "ionic-angular";
import { Component, ViewChild } from "@angular/core";
import { AccountCreationPage } from "../pages/account-creation/account-creation";
import { AccountPage } from "../pages/account/account";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { MealHomePage } from "../pages/meal-home/meal-home";
import { ProductHomePage } from "../pages/product-home/product-home";
import { RecipeHomePage } from "../pages/recipe-home/recipe-home";
import { RecipeViewPage } from "../pages/recipe-view/recipe-view";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { timer } from "rxjs/observable/timer";
import { User } from "../providers/auth-service/auth-service";

@Component({
  templateUrl: "app.html",
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private rootPage: any = HomePage;
  private pages: Array<{title: string, component: any, icon: string }>;
  private connected: boolean = false;
  private developmentState: boolean = true;
  private showSplash: boolean = true;
  private credentials = {email: undefined, pass: undefined};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public alertCtrl: AlertController, private auth: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString("#007713");
      statusBar.show();
      splashScreen.hide();

      timer(3000).subscribe(() => this.showSplash = false);

      const user = this.auth.getUser();
      if (user) {
        this.credentials.email = user.email;
        this.credentials.pass = user.pass;
      }
      if (this.credentials.email && this.credentials.pass) {
        this.connected = true;
      }
      this.refreshMenu();
    });
  }

  public logOut() {
    this.auth.logout().subscribe((allowed) => {
      if (allowed) {
        this.connected = false;
        this.refreshMenu();
      }
    });
  }

  public refreshMenu() {
    this.pages = [
      { title: "Accueil", component: HomePage, icon: "home" },
      { title: "Recettes", component: RecipeHomePage, icon: "bookmarks" },
      { title: "Produits", component: ProductHomePage, icon: "nutrition" },
      { title: "Repas", component: MealHomePage, icon: "restaurant" },
    ];
    if (this.connected) {
      this.pages.push({ title: "Mon Compte", component: AccountPage, icon: "contact" });
    } else {
      this.pages.push({ title: "Connexion", component: LoginPage, icon: "log-in" });
      this.pages.push({ title: "Créer un compte", component: AccountCreationPage, icon: "create" });
    }
    if (this.developmentState) {
      this.pages.push({ title: "RecetteTest", component: RecipeViewPage, icon: "alert" });
    }
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public askLogOut() {
    const confirm = this.alertCtrl.create({
      buttons: [
        {
          handler: () => {
            // console.log("Disagree clicked");
          },
          text: "Non",
        },
        {
          handler: () => {
            // console.log("Agree clicked");
            this.logOut();
          },
          text: "Oui",
        },
      ],
      message: "Voulez vous vraiment vous déconnecter?",
      title: "Se déconnecter?",
    });
    confirm.present();
  }
}
