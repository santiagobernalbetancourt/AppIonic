import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
/**
 * Generated class for the ResumePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {
	dat:any;
	  title:any;
  owner:any;
  description:any;
  orders_list: any;
  stock:any;
  price:any;
  type:any;
  image:any;
  total: any;
  name: any;
  ban = false;
  status:any;
  uid:any;	
  qty: any;

  constructor(private firebaseService: FirebaseServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  

  }

  ionViewDidLoad() {


  	this.dat = this.navParams.get('dato');

  	console.log("RECIBE "+this.dat.id_pay);

  	    this.firebaseService.getCheckout(this.dat.id_pay).subscribe(listing =>{
    	 this.total = 0;
    	 this.qty = 0;
     	
     	console.log("RESUMENT "+JSON.stringify(listing));

     	this.orders_list = listing;

     	//console.log("TAMNANO"+listing.length);

     	       if(this.orders_list.length == 0){
                       this.total = 0;
                     }
                     else{

                     for (var i = 0; i < this.orders_list.length; i++) {
                    
                       
                     		if(this.orders_list[i].order_price!=null){
                     			 this.total = parseInt(this.total) + parseInt(this.orders_list[i].order_price);
                     			 this.qty = parseInt(this.qty) + parseInt(this.orders_list[i].qty);
                     		}
                       
                     	this.status = this.orders_list[i].$value;
                     	
                        	
                         
                     }

                     console.log("TOTAL "+this.total);
                 }
    });

  }

}
