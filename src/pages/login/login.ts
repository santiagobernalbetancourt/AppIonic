import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from "../../models/listing-item/user";
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import firebase from 'firebase';
import {Deploy} from '@ionic/cloud-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	user = {} as User;
	facebook_log = false;

  constructor(public deploy: Deploy, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user: User){

  	try{
  	 const res = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);

  	 console.log(res);
  	 if(res){
  	 	// setRoot -->  no return
  	 	this.navCtrl.push(HomePage);
  	 }else{
  	 	console.log("Error");
  	 }
  	}catch(e){
  		console.error(e);
  	}
  	

  }


  loginFacebook(){

  			this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider()).then( res => {
  				
  			
  				console.log(res);

  				if(res){
  					this.facebook_log = true;
  					this.navCtrl.push(HomePage);
  				}else{

  				}
  			});

  }

  logout(){

  	  this.afAuth.auth.signOut();
  	  this.facebook_log = false;
  }


  goRegister(){

  	 console.log("registrar");

  	 this.navCtrl.push(RegisterPage);

  }

}
