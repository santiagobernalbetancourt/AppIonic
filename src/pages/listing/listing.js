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
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
var ListingPage = (function () {
    function ListingPage(navCtrl, navParams, database) {
        var _this = this;
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
        this.listingRef$.subscribe(function (xy) {
            _this.listado = xy;
            _this.listado.forEach(function (element) {
                //console.log(element.image);
                var spaceRef = _this.imagesRef.child(element.image).getDownloadURL().then(function (url) {
                    _this.imgsource = url;
                    console.log(_this.imgsource);
                    _this.it = {
                        'image': _this.imgsource
                    };
                    _this.arreglo.push(_this.it);
                });
            });
        });
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListingPage');
    };
    return ListingPage;
}());
ListingPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-listing',
        templateUrl: 'listing.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AngularFireDatabase])
], ListingPage);
export { ListingPage };
//# sourceMappingURL=listing.js.map