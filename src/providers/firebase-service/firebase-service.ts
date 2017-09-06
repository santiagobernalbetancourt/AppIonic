import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

import 'firebase/storage';

@Injectable()
export class FirebaseServiceProvider {

    items: FirebaseListObservable<any[]>;
    orders: FirebaseListObservable<any[]>;
    ord: FirebaseListObservable<any[]>;
    check: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
    p: FirebaseObjectObservable<any>;
    order: FirebaseObjectObservable<any>;
    folder:any;
    uploadTask: firebase.storage.UploadTask;
    pay:  FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, public af: AngularFireAuth) { 

     this.folder = "listingimages";
     this.items = this.database.list('/listings',{ preserveSnapshot: true }) as FirebaseListObservable<Listing[]>;
     this.orders = this.database.list('/orders'  )  as FirebaseListObservable<Listing[]>;
     this.pay = this.database.list('/pay'  )  as FirebaseListObservable<Listing[]>;


  }


  searchQuery(id){
    
    this.ord = this.database.list('/orders', {
        query: {
          orderByChild: 'uid',
          equalTo:  id
        }
    });

    return this.ord;

  }



  searchCheck(id){
    
    this.check = this.database.list('/pay/'+id);

    return this.check;

  }




    removeOrders(id){
        
          let t = id;

          console.log("VARIABLE "+t);

          firebase.database().ref('/orders/' + t).once('value').then(function(snapshot) {
          
            console.log(" SNAPSHPOT"+JSON.stringify(snapshot.val()));

              if(snapshot.val() != null){
                 
                    console.log("SI ESTA");

                    var cantidad = snapshot.val().stock;

                    firebase.database().ref('/orders/'+t).remove();


              }else{

                 console.log("NO ESTA ELIMINAMOS");
                     
                  

              }
            // ...
          });

  }


  deleteResume(id){

       firebase.database().ref('/pay/'+id).remove();

  }


  passOrder(id, id_pay){

     firebase.database().ref('/orders/' + id).once('value').then(function(snapshot) {

                 if(snapshot.val() != null){

                        console.log("SI ESTA");

                        /*firebase.database().ref('/orders/'+id).update({
                             order_ban: 0
                        }); */

                         firebase.database().ref('/orders/'+id).remove();

                        //  firebase.database().ref('/pay/'+id_pay).remove();

             
                 }
                 else{

                      console.log("NO ESTA");

                       firebase.database().ref('/orders/'+id).remove();

                       //   firebase.database().ref('/pay/'+id_pay).remove();
           
                     // firebase.database().ref('/pay/'+d).set(listing);
                 }


     });

   
  }

    statusPay(id){

     firebase.database().ref('/pay/' + id).once('value').then(function(snapshot) {

                 if(snapshot.val() != null){

                        console.log("SI ESTA"+id);

                        firebase.database().ref('/pay/'+id).update({
                             status: 1
                        }); 

             
                 }
                 else{

                     console.log("NO ESTA"+id);

                     firebase.database().ref('/pay/'+id).update({
                             status: 1
                        }); 
                     // firebase.database().ref('/pay/'+d).set(listing);
                 }


     });

   
  }


    reverseOrder(id){

     firebase.database().ref('/orders/' + id).once('value').then(function(snapshot) {

                 if(snapshot.val() != null){

                        console.log("SI ESTA");

                        firebase.database().ref('/orders/'+id).update({
                             order_ban: 1
                        }); 
             
                 }
                 else{

                      console.log("NO ESTA");

           
                     // firebase.database().ref('/pay/'+d).set(listing);
                 }


     });

   
  }

  checkout(listing){


         let d = listing[0].ids_ord;

         console.log(" T "+d);

         firebase.database().ref('/orders/' + d ).once('value').then(function(snapshot) { 

                 if(snapshot.val() != null){

                      console.log("SI ESTA"+listing.length);

   
             
                 }
                 else{

                      console.log("NO ESTA"+listing.length);

           
                     // firebase.database().ref('/pay/'+d).set(listing);
                 }


         });

  }

  addPay(listing){

         let d = listing[0].uid;

         console.log(" T "+d);

         firebase.database().ref('/pay/' + d ).once('value').then(function(snapshot) { 

                 if(snapshot.val() != null){

                      console.log("SI ESTA"+listing.length);

                     for (var i = 0; i < listing.length; i++) {
        
                              


                               let ord = {
                                    id_order: d,
                                    uid_order: listing[i].uid,
                                    ids_ord: listing[i].id,
                                    qty: listing[i].stock,
                                    status: 0,
                                    title: listing[i].title,
                                    price: listing[i].price,
                                    order_price: listing[i].order_price,
                                    description: listing[i].description
                               }

                             //firebase.database().ref('/pay/'+listing[i].uid).push(ord);

                            

                         }
             
                 }
                 else{


                      let id = listing[0].uid;

                      console.log("NO ESTA"+listing.length);

                               firebase.database().ref('/pay/'+id).set({
                                     status: 0
                               });


                      for (var i = 0; i < listing.length; i++) {
        


                               let ord = {
                                    id_order: d,
                                    uid_order: listing[i].uid,
                                    ids_ord: listing[i].id,
                                    qty: listing[i].stock,
                                    status: 0,
                                    title: listing[i].title,
                                    price: listing[i].price,
                                    order_price: listing[i].order_price,
                                    description: listing[i].description
                               }

                             firebase.database().ref('/pay/'+id).push(ord);

                            

                         }
                     // firebase.database().ref('/pay/'+d).set(listing);
                 }


         });
  }


  addOrders(listing){

         let t = listing.id;


         firebase.database().ref('/orders/' + t).once('value').then(function(snapshot) {
          
           // console.log(" SNAPSHPOT"+JSON.stringify(snapshot.val()));

              if(snapshot.val() != null){
                 
                    console.log("SI ESTA");

                    var cantidad = snapshot.val().stock;

                    firebase.database().ref('/orders/'+t).update({
                        stock: cantidad+1
                    });

              }else{

                 console.log("NO ESTA");
                     
                    firebase.database().ref('/orders/'+t).set({
                        title: listing.title,
                        id: listing.id,
                        image: listing.image,
                        path:  listing.path,
                        description: listing.description,
                        price: listing.price,
                        order_price: listing.price,
                        type:  listing.type,
                        uid:   listing.uid,
                        order_ban: 1,
                        status: 1,
                        stock: 1
                    });

              }
            // ...
          });
  }


  activado(id){

          firebase.database().ref('/orders/' + id).once('value').then(function(snapshot) {
          
   
              if(snapshot.val() != null){
                     
                    var status = snapshot.val().status;

                    if(status == 1){
                           firebase.database().ref('/orders/'+id).update({
                             status: 0
                           }); 
                    }else{
                           firebase.database().ref('/orders/'+id).update({
                               status: 1
                           }); 
                    }
          
                


              }else{

                 console.log("CAMBIO DE STATUS");
                     
                  

              }
            // ...
          });

  }

  increment(id){

          firebase.database().ref('/orders/' + id).once('value').then(function(snapshot) {
          
   
              if(snapshot.val() != null){
                     
                    var qty = snapshot.val().stock + 1;
                    var price = snapshot.val().price;
                    var order_price = price * qty;
          
                   firebase.database().ref('/orders/'+id).update({
                         stock: qty,
                         order_price: order_price,
                         price: price
                     }); 


              }else{

                 console.log("NO ESTA ELIMINAMOS");
                     
                  

              }
            // ...
          });

  }


  //decrement

  decrement(id){

           firebase.database().ref('orders/' + id).once('value').then(function(snapshot) {
          
              if(snapshot.val() != null){
              

                    var qty = snapshot.val().stock - 1;
                    var price  = snapshot.val().price;
                    var order_price = snapshot.val().order_price - price
         
                    if(qty <= 0){
                        // this.removeOrders(id);
                    }else{
                        firebase.database().ref('/orders/'+id).update({
                           stock: qty,
                           order_price: order_price,
                           price: price
                        });

                    }


              }else{

                 console.log("NO ESTA ELIMINAMOS");


              }
            // ...
          });


  }






  getOrders(){
      return this.orders;
  }


  getListings(){
     
      return this.items;
      
  }


  updateListing(id, item){
     return this.items.update(id, item);
  }


  deleteListing(id){
     return this.items.remove(id)
  }

  getListingDetails(id){
      this.item = this.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
      return this.item;
  }



  getCheckout(id){
      return this.database.list('/pay/'+id);
     // return this.p;
  }

  addListing(item){
    //create root ref
   
    //let code = (<HTMLInputElement>document.getElementById('imagen')).src;

    let storageRef = firebase.storage().ref();

    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        let path = `/${this.folder}/${selectedFile.name}`;
        let iRef = storageRef.child(path);
 
       
        iRef.put(selectedFile).then((snapshot)=>{

            item.image = selectedFile.name;
            item.path = path;
            //item.code = code;
          
            this.database.database.ref('listings/' + item.id).set(item);
    });
  
  }


}







}

interface Listing{
   $key?:string;
   title?: string;
   stock: number;
   type?:string;
   images?: string;
   code?: string;
   city?:string;
   owner?:string;
   bedrooms?:string;
}