import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import firebase from 'firebase';
/**
 * Generated class for the ListingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import  { ListingItem } from '../../models/listing-item/listing-item.interface';



@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {

   listingRef$: FirebaseListObservable<ListingItem[]>;
   precios :Array<FirebaseObjectObservable<any>>
   firestore = firebase.storage().ref();
   imagesRef = this.firestore.child('listingimages');
   imgsource: any;

   listado:any = [];
   arreglo:any = [];
   it:any;

   constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {

  	this.listingRef$ = this.database.list('listings',{ query: {
      orderByKey: true
    }});

  	

  	this.listingRef$.subscribe( xy =>{
  			
  		this.listado = xy;

  		 this.listado.forEach(element => {
            //console.log(element.image);
            var spaceRef = this.imagesRef.child(element.image).getDownloadURL().then((url) => {
			    
			        this.imgsource = url;

			        console.log(this.imgsource);

			        this.it = {
  		    		 'image' : this.imgsource
  		    	    }

  		    	this.arreglo.push(this.it);

			         
			    });

  		   
        });
  		
   });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
  }

}
