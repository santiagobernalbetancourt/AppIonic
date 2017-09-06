import { Component } from '@angular/core';
import { NavController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import firebase from 'firebase';
import  { ListingItem } from '../../models/listing-item/listing-item.interface';
import { DetailsPage } from '../details/details';
import { OrdersPage } from '../orders/orders';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	 total: any;
    total_tot:any;
    orders_list: any;
   name:any;
   listingRef$: FirebaseListObservable<ListingItem[]>;
   precios :Array<FirebaseObjectObservable<any>>
   firestore = firebase.storage().ref();
   imagesRef = this.firestore.child('listingimages');
   imgsource: any;

   listado:any = [];
   arreglo:any = [];
   it:any;
   uid:any;
   ban=false;



   constructor(public firebaseService: FirebaseServiceProvider, public modalCtrl: ModalController, private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

  	this.listingRef$ = this.database.list('listings',{ query: {
      orderByKey: true
    }});


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

  	this.listingRef$.subscribe( xy =>{
  			
  		this.listado = xy;

    
  		 this.listado.forEach(element => {
         	
         	   let storageRef = firebase.storage().ref();
         		  storageRef.child(element.path).getDownloadURL().then((url) => {
			    
			        this.imgsource = url;

              //this.listado[i].image = this.imgsource;

			          

			        this.it = {
  		    		 'image' : this.imgsource,
  		    		 'id': element.id,
  		    		 'stock': element.stock,
  		    		 'title' : element.title,
  		    		 'price' : element.price,
  		    		 'description': element.description
  		    	    }

  		    			this.arreglo.push(this.it);

			         
			    });

  		   
        });
  		
   });
}

  ionViewWillLoad(){
  	   this.afAuth.authState.subscribe( data => {
  	   			console.log("data "+data);

  	   			if(data.email && data.uid){
  	   				
  	   				this.name = data.displayName;

  	   				this.toast.create({
  	   					message: `Welcome a App ${ data.email }`,
  	   					duration: 3000
  	   				}).present();
  	   			}else{
  	   				this.toast.create({
  	   					message: 'Error Authentication',
  	   					duration: 3000
  	   				}).present();
  	   			}
  	   		
  	   });

         
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


  details(item){

  		   
  		    let modal = this.modalCtrl.create(DetailsPage, {
  		    		image: item.image,
  		    		title: item.title,
  		    		id: item.id,
  		    		stock: item.stock,
  		    		description: item.description,
  		    		price: item.price
  		    });
    		modal.present();
  		
  }


    orders(){
      console.log("ORDERS");
      this.navCtrl.push(OrdersPage);

   }

}
