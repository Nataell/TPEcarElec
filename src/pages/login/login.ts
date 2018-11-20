import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accounts = [
      { mail: "mika@rotte.fr", pass: "mika" },
      { mail: "trist@itude.fr", pass: "trist" },
      { mail: "anto@nique.fr", pass: "anto"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openForgetPasswordPage(){
    console.log("click on forget password button");
  }

  logIn(){
    var logedIn = false;
    for (let i = 0; i < this.accounts.length; i++) {
      if(this.mail==this.accounts[i].mail && this.pass==this.accounts[i].pass){
        console.log("Connected");
        logedIn = true;
      }
    }
    if(!logedIn){
      console.log("Unknow informations. Please verify and retry");
    }
    else{
      window.localStorage.setItem("Mail", this.mail);
      window.localStorage.setItem("Password", this.pass);
    }
    console.log("The user wants to login with "+this.mail+" as id and "+this.pass+" as password");
  }
}
