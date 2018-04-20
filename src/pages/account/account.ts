import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AccountCreationPage } from '../account-creation/account-creation';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  openLogInPage(){
    this.navCtrl.push(LoginPage);
  }

  openCreateAccountPage(){
    this.navCtrl.push(AccountCreationPage);
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
          }
        }
      ]
    });
    confirm.present();
  }
}
