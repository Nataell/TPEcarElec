import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasketPage } from '../basket/basket';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

	products: Array<{ imgSrc: string, imgTitle: string }>;
	datas:any = [];

	constructor(public navCtrl: NavController) {
		this.products = [
			{ imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/220px-Bright_red_tomato_and_cross_section02.jpg", imgTitle: "Tomates" },
			{ imgSrc: "http://selection.readersdigest.ca/wp-content/uploads/2016/03/super-legume-superaliment.jpg", imgTitle: "Radis" },
			{ imgSrc: "https://cf.ltkcdn.net/vegetarian/images/std/121644-425x282-Peaslegume.jpg", imgTitle: "Petits pois" },
			{ imgSrc: "https://img2.pleinevie.fr/var/pleinevie/storage/images/article/la-courgette-le-legume-anti-gaspi-de-l-ete-12271/72276-1-fre-FR/La-courgette-le-legume-anti-gaspi-de-l-ete_width1024.jpg", imgTitle: "Courgettes" },
			{ imgSrc: "https://statics.monoprix.fr/course/g_93960_3-poivrons-rouge-vert-jaune-cat-1.jpg?t=20170909032439", imgTitle: "Poivrons" }
		];
  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

	goNewProduct(){
		console.log("Les nouveaux produits.");
	}

	goSeasonProduct(){
		console.log("Les produits de saisons.");
	}

	goAllProduct(){
		console.log("Tout les produits.");
	}
}
