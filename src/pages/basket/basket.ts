import { AlertController, NavController } from "ionic-angular";
import { Component } from "@angular/core";

@Component({
  selector: "page-basket",
  templateUrl: "basket.html",
})
export class BasketPage {

  public purchases: Array<{ imgSrc: string, imgTitle: string, seller: string, price: number, quantity : number }>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.purchases = [
      { imgSrc: "https://image.afcdn.com/recipe/20170112/28965_w1024h768c1cx1500cy1000.jpg", imgTitle: "CROQUE-MONSIEUR", seller: "Auchan", price: 0.0, quantity : 1 },
      { imgSrc: "http://static.pratico-pratiques.com/uploads/images/recipe/orig/dbcd14d205b9b2447db0414781f91879/hamburger-vegetarien-aux-haricots-blancs.jpeg", imgTitle: "HAMBURGER VÉGÉ", seller: "Auchan", price: 0.0, quantity : 1 },
      { imgSrc: "http://selection.readersdigest.ca/wp-content/uploads/2016/03/super-legume-superaliment.jpg", imgTitle: "RADIS", seller: "Auchan", price: 0.0, quantity : 2 },
      { imgSrc: "https://cf.ltkcdn.net/vegetarian/images/std/121644-425x282-Peaslegume.jpg", imgTitle: "PETITS POIS", seller: "Auchan", price: 0.0, quantity : 1 },
      { imgSrc: "https://statics.monoprix.fr/course/g_93960_3-poivrons-rouge-vert-jaune-cat-1.jpg?t=20170909032439", imgTitle: "POIVRONS", seller: "Auchan", price: 0.0, quantity : 2 },
    ];
  }

  public confirmDelete() {
    const confirm = this.alertCtrl.create({
      buttons: [
        {
          handler: () => {
            // console.log("Supprimer");
          },
          text: "Oui",
        },
        {
          handler: () => {
            // console.log("Abandon supression");
          },
          text: "Non",
        },
      ],
      message: "Voulez-vous vraiment supprimer cet élément ?",
      title: "Supression",
    });
    confirm.present();
  }

  public confirmAdd() {
    const prompt = this.alertCtrl.create({
      buttons: [
        {
          handler: (data) => {
            // console.log("Ajout");
          },
          text: "Ajouter",
        },
        {
          handler: (data) => {
            // console.log("Abandon supression");
          },
          text: "Abandon",
        },
      ],
      inputs: [
        {
          name: "Quantité",
          placeholder: "0",
        },
      ],
      message: "Voulez-vous vraiment ajouter des éléments ?",
      title: "Ajout",
    });
    prompt.present();
  }

  public computeQuantity() {
    let priceTotal = 0;
    this.purchases.forEach( (purchase) => {
      priceTotal += purchase.price;
    });
    return priceTotal;
  }

}
