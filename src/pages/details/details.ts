import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { OrdersPage } from '../orders/orders';

import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
 /* Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 import * as firebase from 'firebase';

import 'firebase/storage';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

	 total: any;
    total_tot:any;
    orders_list: any;
	id:any;
	image:any;
	title: any;
  	item:any;
  	price: any;
  	description: any;
  	qty:any;
 listing:any;
  imageUrl: any;
  name: any;
  uid:any;
  ban=false;

  public user_data = {
    profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
    name_surname: 'Can Delibas',
    username: 'candelibas',
    website: 'https://github.com/candelibas',
    description: 'Software developer, open-source lover & Invoker spammer',
    email: 'candelibas00@gmail.com',
    phone: '',
    gender: 'male'
  };

  constructor( public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public firebaseService: FirebaseServiceProvider) {


  	      this.firebaseService.af.authState.subscribe( data => {

            if(data){
              
              this.name = data.displayName;
              this.uid = data.uid;

              console.log("ID"+this.uid);

              this.ban = true;
            }else{
              console.log(" NADA DATA");
              this.ban = false;
            }
        });

  		this.item = {
  			 id: navParams.get('id'),
  			 image: navParams.get('image'),
  			 title: navParams.get('title'),
  			 description: navParams.get('description'),
  			 price: navParams.get('price'),

  		}


  		    this.id = this.item.id;


        console.log("ID "+this.id);

  	   this.firebaseService.getListingDetails(this.id).subscribe(
        listing => {
          this.listing = listing;
          console.log(listing);
          //Store Ref
          let storageRef = firebase.storage().ref();
          let spaceRef = storageRef.child(this.listing.path);
          storageRef.child(this.listing.path).getDownloadURL().then((url)=>{
            this.imageUrl = url;
          }).catch((error)=>{
              console.log(error);
          });

        }
     );
  
  }


   updateProfile() {
    let loader = this.loadingCtrl.create({
      duration: 200
    });
    loader.present().then( () => this.navCtrl.pop() ); // Get back to profile page. You should do that after you got data from API
  }

  ionViewDidLoad() {
         
         this.firebaseService.searchQuery(this.uid).subscribe(orders => {
              
                this.total = 0;
                this.orders_list = orders;
                

                  for (var i = 0; i < this.orders_list.length; i++) {

                        if(this.orders_list[i].order_ban == 1){
                            this.total ++;
                        }
                  }
         });

  }

    dismiss() {
     this.viewCtrl.dismiss();
    }


   buy(listing,  ima){
       	
       	console.log("IMAGEN "+ima.value);

        this.listing.uid = this.uid;
       this.listing.image = ima.value;
         
       this.firebaseService.addOrders(listing);

       this.navCtrl.pop();
  
   }

   increment(){

   }

   decrement(){

   }

   orders(){

   	this.navCtrl.push(OrdersPage);
   }

}
