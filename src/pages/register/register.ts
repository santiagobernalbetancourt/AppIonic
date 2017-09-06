import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/listing-item/user";
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(user: User){

  	try {
  		const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  		console.log(result);
  		this.navCtrl.pop();
  	}
  	catch(e){
  		console.error(e);
  	}

  }

  goBack(){
  	  this.navCtrl.pop();
  }

}
