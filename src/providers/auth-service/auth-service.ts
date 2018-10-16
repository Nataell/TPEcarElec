import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  email: string;
  name: string;
  pass: string;
  favoriteAmapp: Array<string>;
  myRecipesIds: Array<string>;

  constructor(email: string, pass){
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("pass", pass);
    this.email = email;
    this.pass = pass;
    this.favoriteAmapp = [];
    this.myRecipesIds = [];
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(private alertCtrl: AlertController) {
    if(window.localStorage.getItem("email") && window.localStorage.getItem("pass")){
      this.currentUser = new User(window.localStorage.getItem("email"),window.localStorage.getItem("pass"));
    }
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials){
    console.log("Tried to log in with ", credentials);
    if(credentials.email == null || credentials.pass == null){
      return Observable.throw("Inserez des indentifiants s'il vous plait.");
    }
    else{
      return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        let access = (credentials.pass === "test" && credentials.email === "test@test.fr");
        this.currentUser = new User('test', 'test@test.fr');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(infos){
    if(infos.email == null || infos.pass == null || infos.name == null ){
      let alert = this.alertCtrl.create({
        title: 'Informations invalides',
        message: 'Remplissez les champs email et mot de passe pour vous connecter',
        buttons: ['Retour']
      });
      alert.present();
    }
    else{
      //check backend
      this.currentUser = new User(infos.email,infos.pass);
    }
  }

  public getUser(){
    return this.currentUser;
  }

  public logout() {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("pass");
    window.localStorage.removeItem("name");
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }



}