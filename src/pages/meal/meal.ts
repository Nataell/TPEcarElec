import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
	selector: 'page-meal',
	templateUrl: 'meal.html'
})
export class MealPage {

	meals: Array<{ imgSrc: string, imgTitle: string, seller: string, price: string, seasonMeal: boolean }>;
	datas:any = [];

	constructor(public navCtrl: NavController) {
		this.meals = [
			{ imgSrc: "https://image.afcdn.com/recipe/20170112/28965_w1024h768c1cx1500cy1000.jpg", imgTitle: "CROQUE-MONSIEUR", seller: "Auchan", price: "0.0", seasonMeal : true },
			{ imgSrc: "https://chefcuisto.com/files/2017/05/salade-patates-bacon-624x541.jpg", imgTitle: "SALADE DE PATATES", seller: "Auchan", price: "0.0", seasonMeal : true },
			{ imgSrc: "http://static.pratico-pratiques.com/uploads/images/recipe/orig/dbcd14d205b9b2447db0414781f91879/hamburger-vegetarien-aux-haricots-blancs.jpeg", imgTitle: "HAMBURGER VÉGÉ", seller: "Auchan", price: "0.0", seasonMeal : true },
			{ imgSrc: "https://static.cuisineaz.com/400x320/i71303-recette-pate-spaghettis-bolognaise-maison.jpg", imgTitle: "SPAGUETTI BOLOGNAISE", seller: "Auchan", price: "0.0", seasonMeal : true },
			{ imgSrc: "http://assets.kraftfoods.com/recipe_images/opendeploy/124046-79ffeaf4256ab8c9b743cbfb071084dc1c01548d_642x428.jpg", imgTitle: "SALADES DE LÉGUMES", seller: "Auchan", price: "0.0", seasonMeal : true }
		];
	}

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

	goNewMeal(namePage){
		console.log("Les nouveaux repas.");
		/*this.navCtrl.push(ProductsListPage, {
		title: namePage
	});*/
}

goSeasonProduct(){
	console.log("Les repas de saisons.");
}

goAllProduct(){
	console.log("Tout les repas.");
}

goSingleMeal(mealName){
	console.log(mealName);
	/*this.navCtrl.push(ProductsViewPage, {
	title: productName
});*/
}
}
