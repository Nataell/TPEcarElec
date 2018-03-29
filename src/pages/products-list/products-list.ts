import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BasketPage } from '../basket/basket';
import { ProductsViewPage } from '../products-view/products-view';

@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

	titlePage: String;
	products: Array<{ imgSrc: string, imgTitle: string, seller: string, price: string, seasonProduct: boolean }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.products = [{ imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg", imgTitle: "TOMATES", seller: "Auchan", price: "0.0", seasonProduct : true },
			{ imgSrc: "http://selection.readersdigest.ca/wp-content/uploads/2016/03/super-legume-superaliment.jpg", imgTitle: "RADIS", seller: "Auchan", price: "0.0", seasonProduct : true },
			{ imgSrc: "https://cf.ltkcdn.net/vegetarian/images/std/121644-425x282-Peaslegume.jpg", imgTitle: "PETITS POIS", seller: "Auchan", price: "0.0", seasonProduct : true },
			{ imgSrc: "https://img2.pleinevie.fr/var/pleinevie/storage/images/article/la-courgette-le-legume-anti-gaspi-de-l-ete-12271/72276-1-fre-FR/La-courgette-le-legume-anti-gaspi-de-l-ete_width1024.jpg", imgTitle: "COURGETTES", seller: "Auchan", price: "0.0", seasonProduct : true },
			{ imgSrc: "https://statics.monoprix.fr/course/g_93960_3-poivrons-rouge-vert-jaune-cat-1.jpg?t=20170909032439", imgTitle: "POIVRONS", seller: "Auchan", price: "0.0", seasonProduct : true }
		];
		this.titlePage = navParams.get("title");
		console.log(this.titlePage);
  }

	goBasket(){
		this.navCtrl.push(BasketPage);
	}

	goSingleProduct(productName){
		console.log(productName);
		this.navCtrl.push(ProductsViewPage, {
			title: productName
		});
	}

}
