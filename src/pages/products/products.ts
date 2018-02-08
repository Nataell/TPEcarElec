import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

	products: Array<{ imgSrc: string }>;
	datas:any = [];

	constructor(public navCtrl: NavController) {
		this.products = [
			{ imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/220px-Bright_red_tomato_and_cross_section02.jpg" },
			{ imgSrc: "http://selection.readersdigest.ca/wp-content/uploads/2016/03/super-legume-superaliment.jpg" },
			{ imgSrc: "https://cf.ltkcdn.net/vegetarian/images/std/121644-425x282-Peaslegume.jpg" },
			{ imgSrc: "https://img2.pleinevie.fr/var/pleinevie/storage/images/article/la-courgette-le-legume-anti-gaspi-de-l-ete-12271/72276-1-fre-FR/La-courgette-le-legume-anti-gaspi-de-l-ete_width1024.jpg" },
			{ imgSrc: "https://statics.monoprix.fr/course/g_93960_3-poivrons-rouge-vert-jaune-cat-1.jpg?t=20170909032439" }
		];
  }

	goSettings(){
		this.navCtrl.push(SettingsPage);
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
