import { AccountCreationPage } from "../account-creation/account-creation";
import { AlertController } from "ionic-angular";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html",
})

export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  public ionViewDidLoad() {
    // console.log("ionViewDidLoad AccountPage");
  }

  public openLogInPage() {
    this.navCtrl.push(LoginPage);
  }

  public openCreateAccountPage() {
    this.navCtrl.push(AccountCreationPage);
  }

  public showLogout() {
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
