import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
 /* Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { CheckoutPage } from "../checkout/checkout";
 import * as firebase from 'firebase';
/**
 * Generated class for the OrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	    total: any;
    total_tot:any;
    orders_list: any;
    check_list: any;
     fires: any;
     ban = false;
     name: any;
     uid:any;
     suma: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,  public firebaseService: FirebaseServiceProvider) {
 	   
 	   this.firebaseService.af.authState.subscribe( data => {

            if(data){
              
              this.name = data.displayName;
              this.uid = data.uid;
              this.ban = true;
            }else{
              console.log(" NADA DATA");
              this.ban = false;
            }
        });
  }

  ionViewDidLoad() {

      this.suma = 0;
             //this.orders_list =  this.fire.searchQuery();
          this.firebaseService.searchQuery(this.uid).subscribe(orders => {
                  this.total = 0;
                this.orders_list = orders;
                

                  for (var i = 0; i < this.orders_list.length; i++) {

                        if(this.orders_list[i].order_ban == 1){
                            this.total ++;
                            //this.suma = parseInt(this.suma) + parseInt(this.orders_list[i].order_price);
                        }
                  }
         });
  }


  pay(){
        
        let arr = [];
        this.suma=0;


         for (var i = 0; i < this.orders_list.length; i++) {
        
           // console.log("AQUIIII FUE "+this.orders_list[i].uid+" ddd ");

              let list = {
                    uid: this.orders_list[i].uid,
                    id: this.orders_list[i].id,
                    stock: this.orders_list[i].stock,
                    price: this.orders_list[i].price,
                    order_price: this.orders_list[i].order_price,
                    description: this.orders_list[i].description,
                    title: this.orders_list[i].title
              }

              this.suma =  parseInt(this.suma) +  parseInt(this.orders_list[i].order_price);
              
              arr.push(list);
             
         }
        
            this.firebaseService.addPay(arr);

           // this.router.navigate(['/checkout/'+this.uid]);
             console.log(" PYA   "+this.uid);

            this.navCtrl.push(CheckoutPage, { uid: this.uid });
  }


    increment(id){
    
      this.firebaseService.increment(id);
    }

    activado(id){
      this.firebaseService.activado(id);
    }

    decrement(id){
      this.firebaseService.decrement(id);
    }

    remove(id){
      this.firebaseService.removeOrders(id);
    }

}
