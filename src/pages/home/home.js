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
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { DetailsPage } from '../details/details';
var HomePage = (function () {
    function HomePage(afAuth, toast, navCtrl, navParams, database) {
        var _this = this;
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firestore = firebase.storage().ref();
        this.imagesRef = this.firestore.child('listingimages');
        this.listado = [];
        this.arreglo = [];
        this.listingRef$ = this.database.list('listings', { query: {
                orderByKey: true
            } });
        this.total = 1;
        this.listingRef$.subscribe(function (xy) {
            _this.listado = xy;
            _this.listado.forEach(function (element) {
                var spaceRef = _this.imagesRef.child(element.image).getDownloadURL().then(function (url) {
                    _this.imgsource = url;
                    console.log(JSON.stringify(element));
                    _this.it = {
                        'image': _this.imgsource,
                        'title': element.title,
                        'price': element.price,
                        'description': element.description
                    };
                    _this.arreglo.push(_this.it);
                });
            });
        });
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            console.log("data " + data);
            if (data.email && data.uid) {
                _this.name = data.displayName;
                _this.toast.create({
                    message: "Welcome a App " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'Error Authentication',
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.details = function (item) {
        console.log(item);
        this.navCtrl.push(DetailsPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [AngularFireAuth, ToastController, NavController, NavParams, AngularFireDatabase])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map