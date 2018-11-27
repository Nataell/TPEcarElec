import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mail: "";
  pass: "";
  accounts: Array<{ mail: string, pass: string }>;
  credentials = {email: '', pass: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    // this.accounts = [
    //   { mail: "mika@rotte.fr", pass: "mika" },
    //   { mail: "trist@itude.fr", pass: "trist" },
    //   { mail: "anto@nique.fr", pass: "anto"}
    // ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openForgetPasswordPage(){
    console.log("click on forget password button");
  }

  logIn(){
    this.credentials.email = this.mail;
    this.credentials.pass = this.pass;
    this.auth.login(this.credentials).subscribe(allowed => {
      if(allowed){
        console.log("connection");
      }
    });
  }
}
