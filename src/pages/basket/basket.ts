import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
	selector: 'page-basket',
	templateUrl: 'basket.html'
})
export class BasketPage {

	purchases: Array<{ imgSrc: string, imgTitle: string, seller: string, price: number, quantity : number }>;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
		this.purchases = [
			{ imgSrc: "https://image.afcdn.com/recipe/20170112/28965_w1024h768c1cx1500cy1000.jpg", imgTitle: "CROQUE-MONSIEUR", seller: "Auchan", price: 0.0, quantity : 1 },
			{ imgSrc: "http://static.pratico-pratiques.com/uploads/images/recipe/orig/dbcd14d205b9b2447db0414781f91879/hamburger-vegetarien-aux-haricots-blancs.jpeg", imgTitle: "HAMBURGER VÉGÉ", seller: "Auchan", price: 0.0, quantity : 1 },
			{ imgSrc: "http://selection.readersdigest.ca/wp-content/uploads/2016/03/super-legume-superaliment.jpg", imgTitle: "RADIS", seller: "Auchan", price: 0.0, quantity : 2 },
			{ imgSrc: "https://cf.ltkcdn.net/vegetarian/images/std/121644-425x282-Peaslegume.jpg", imgTitle: "PETITS POIS", seller: "Auchan", price: 0.0, quantity : 1 },
			{ imgSrc: "https://statics.monoprix.fr/course/g_93960_3-poivrons-rouge-vert-jaune-cat-1.jpg?t=20170909032439", imgTitle: "POIVRONS", seller: "Auchan", price: 0.0, quantity : 2 }
		];
	}

	confirmDelete() {
		let confirm = this.alertCtrl.create({
			title: 'Supression',
			message: 'Voulez-vous vraiment supprimer cet élément ?',
			buttons: [
				{
					text: 'Oui',
					handler: () => {
						console.log('Supprimer');
					}
				},
				{
					text: 'Non',
					handler: () => {
						console.log('Abandon supression');
					}
				}
			]
		});
		confirm.present();
	}

	confirmAdd() {
		let prompt = this.alertCtrl.create({
			title: 'Ajout',
			message: "Voulez-vous vraiment ajouter des éléments ?",
			inputs: [
				{
					name: 'Quantité',
					placeholder: '0'
				},
			],
			buttons: [
				{
					text: 'Ajouter',
					handler: data => {
						console.log('Ajout');
					}
				},
				{
					text: 'Abandon',
					handler: data => {
						console.log('Abandon supression');
					}
				}
			]
		});
		prompt.present();
	}

	computeQuantity(){
		let priceTotal = 0;
		this.purchases.forEach(purchase => {
			priceTotal += purchase.price;
		})
		return priceTotal;
	}

}
