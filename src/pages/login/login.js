var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.facebook_log = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        try {
            var res = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            console.log(res);
            if (res) {
                // setRoot -->  no return
                this.navCtrl.push(HomePage);
            }
            else {
                console.log("Error");
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function (res) {
            console.log(res);
            if (res) {
                _this.facebook_log = true;
                _this.navCtrl.push(HomePage);
            }
            else {
            }
        });
    };
    LoginPage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.facebook_log = false;
    };
    LoginPage.prototype.goRegister = function () {
        console.log("registrar");
        this.navCtrl.push(RegisterPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [AngularFireAuth, NavController, NavParams])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map