import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: "page-login",
  templateUrl: "login.html",
})

export class LoginPage {
  private mail: undefined;
  private pass: undefined;
  private accounts: Array<{ mail: string, pass: string }>;
  private credentials = {email: undefined, pass: undefined};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    // this.accounts = [
    //   { mail: "mika@rotte.fr", pass: "mika" },
    //   { mail: "trist@itude.fr", pass: "trist" },
    //   { mail: "anto@nique.fr", pass: "anto"}
    // ];
  }

  public ionViewDidLoad() {
    // console.log("ionViewDidLoad LoginPage");
  }

  public openForgetPasswordPage() {
    // console.log("click on forget password button");
  }

  public logIn() {
    this.credentials.email = this.mail;
    this.credentials.pass = this.pass;
    this.auth.login(this.credentials).subscribe((allowed) => {
      if (allowed) {
        // console.log("connection");
      }
    });
  }
}
