import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { ResumePage } from "../resume/resume";



@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

	  id:any;
  title:any;
  owner:any;
  description:any;
  orders_list: any;
  stock:any;
  price:any;
  type:any;
  image:any;
  suma: any;
  name: any;
  ban = false;
  estatus:any;

  uid:any;	

  constructor(private firebaseService: FirebaseServiceProvider, public navCtrl: NavController, public navParams: NavParams) {



  		this.id = this.navParams.get('uid');

  }



  ionViewDidLoad() {

  
    
   
   
    
    this.firebaseService.getCheckout(this.id).subscribe(listing =>{
    	 this.suma = 0;
     	//console.log("RESUMENT "+JSON.stringify(listing));

     	this.orders_list = listing;

     	//console.log("TAMNANO"+listing.length);

     	       if(this.orders_list.length == 0){
                       this.suma = 0;
                     }
                     else{

                     for (var i = 0; i < this.orders_list.length; i++) {
                    
                       
                     		if(this.orders_list[i].order_price!=null){
                     			 this.suma = parseInt(this.suma) + parseInt(this.orders_list[i].order_price);
                     		}
                       
                     	this.estatus = this.orders_list[i].$value;
                        	
                         
                     }

                     console.log("TOTAL "+this.suma);
                 }
    });
  }

  onCheckout(id){
  			
        console.log(" AQUI "+JSON.stringify(id));
  			let order = 0;
  			let ids= 0;

  			for (var i = 0; i < id.length - 1; i++) {
  						
  						order =  id[i].$key;
  						ids= id[i].id_order;
              id = id[i].ids_ord;

               console.log("  IIIIIIDDDD "+ids+" ID "+id);
  					  
  					//	this.firebaseService.passOrder(id[i].ids_ord, id[i].id_order);
  			}
        

        console.log("ID S"+ids);
        

  			this.firebaseService.statusPay(ids);

        //this.firebaseService.passOrder(id, ids);

        let d = {
            id_pay: ids,
            id_order: order
        }

        this.navCtrl.push(ResumePage, { dato: d});
        
  }


  onReverse(id){
  			
  			console.log(" AQUI "+JSON.stringify(id));
  			

  			for (var i = 0; i < id.length; i++) {

  					console.log(" ID "+id[i].id_order);
  						this.firebaseService.reverseOrder(id[i].ids_ord);
  						this.firebaseService.deleteResume(id[i].id_order)
  			}

  			this.navCtrl.pop();

  }
  

}
