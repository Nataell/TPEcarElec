import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

/**
 * Generated class for the AccountCreationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account-creation",
  templateUrl: "account-creation.html",
})
export class AccountCreationPage {

  constructor(public navCtrl: NavController) {
  }

  private ionViewDidLoad() {
    console.log("ionViewDidLoad AccountCreationPage");
  }

}
