webpackJsonp([0],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingPage = (function () {
    function ListingPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firestore = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listing',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/listing/listing.html"*/'<!--\n  Generated template for the ListingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Listing</ion-title>\n    <ion-buttons end>\n    		<button ion-button icon-only>\n    			<ion-icon name="add"></ion-icon>\n    		</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item *ngFor="let item of arreglo">\n			\n			<img src="{{item.image}}">\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/listing/listing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], ListingPage);

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyA-9LEhizJpF-PoSVVwjnWRu21qgJ7se3Y",
    authDomain: "restlist-349d4.firebaseapp.com",
    databaseURL: "https://restlist-349d4.firebaseio.com",
    projectId: "restlist-349d4",
    storageBucket: "restlist-349d4.appspot.com",
    messagingSenderId: "118638404444"
};
//# sourceMappingURL=firebase_credentials.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Generated class for the DetailsPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/

/**
 * Generated class for the OrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.ban = false;
        this.firebaseService.af.authState.subscribe(function (data) {
            if (data) {
                _this.name = data.displayName;
                _this.uid = data.uid;
                _this.ban = true;
            }
            else {
                console.log(" NADA DATA");
                _this.ban = false;
            }
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.suma = 0;
        //this.orders_list =  this.fire.searchQuery();
        this.firebaseService.searchQuery(this.uid).subscribe(function (orders) {
            _this.total = 0;
            _this.orders_list = orders;
            for (var i = 0; i < _this.orders_list.length; i++) {
                if (_this.orders_list[i].order_ban == 1) {
                    _this.total++;
                    //this.suma = parseInt(this.suma) + parseInt(this.orders_list[i].order_price);
                }
            }
        });
    };
    OrdersPage.prototype.pay = function () {
        var arr = [];
        this.suma = 0;
        for (var i = 0; i < this.orders_list.length; i++) {
            // console.log("AQUIIII FUE "+this.orders_list[i].uid+" ddd ");
            var list = {
                uid: this.orders_list[i].uid,
                id: this.orders_list[i].id,
                stock: this.orders_list[i].stock,
                price: this.orders_list[i].price,
                order_price: this.orders_list[i].order_price,
                description: this.orders_list[i].description,
                title: this.orders_list[i].title
            };
            this.suma = parseInt(this.suma) + parseInt(this.orders_list[i].order_price);
            arr.push(list);
        }
        this.firebaseService.addPay(arr);
        // this.router.navigate(['/checkout/'+this.uid]);
        console.log(" PYA   " + this.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */], { uid: this.uid });
    };
    OrdersPage.prototype.increment = function (id) {
        this.firebaseService.increment(id);
    };
    OrdersPage.prototype.activado = function (id) {
        this.firebaseService.activado(id);
    };
    OrdersPage.prototype.decrement = function (id) {
        this.firebaseService.decrement(id);
    };
    OrdersPage.prototype.remove = function (id) {
        this.firebaseService.removeOrders(id);
    };
    return OrdersPage;
}());
OrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-orders',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/orders/orders.html"*/'<ion-header>\n <ion-navbar color="primary">\n    <ion-title>\n      Orders\n    </ion-title>\n    	<ion-buttons end>\n    			<button ion-button icon-only>\n    			<ion-icon name="ios-cart" ></ion-icon> {{total}}\n    			</button>\n    	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n<ion-list>\n  <ion-item  *ngFor="let listing of orders_list" >\n    <ion-thumbnail item-start>\n      <img src="{{listing.image}}">\n    </ion-thumbnail>\n\n     <h2 class="price" >$ {{listing.order_price}}</h2>\n    <p>{{listing.title}} </p>\n    <p>{{listing.description}}</p>\n    \n      \n\n     <ion-row>\n    <ion-col col-2>\n      <button class="decrement" ion-button small (click)="decrement(listing.id)">-</button>\n    </ion-col>\n    <ion-col col-2>\n      <p class="stock">{{listing.stock}}</p>\n    </ion-col>\n    <ion-col col-2>\n       \n        <button class="increment" ion-button small (click)="increment(listing.id)">+</button>\n    </ion-col>\n\n       <ion-col col-2>\n       <button class="remove" ion-button color="remove" small (click)="remove(listing.id)"><ion-icon name="trash"></ion-icon>\n        </button>\n    </ion-col>\n  </ion-row>\n    \n\n  \n\n  \n\n  \n   \n  </ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar color="secondary">\n\n   <ion-row>\n      <ion-col col-4>\n    \n    </ion-col>\n    <ion-col col-5>\n     <!-- <ion-title class="qty" >Qty: {{total}}  </ion-title> -->\n    </ion-col>\n     <ion-col col-2>\n    \n    </ion-col>\n    </ion-row>\n\n     <ion-row>\n    <ion-col col-4>\n    </ion-col>\n     <ion-col col-6>\n        <button ion-button round (click)="pay()"> Pay &nbsp; <ion-icon name="card"></ion-icon>\n</button>\n    </ion-col>\n        <ion-col col-2>\n    </ion-col>\n    </ion-row>\n    \n    \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/orders/orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], OrdersPage);

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 277;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(deploy, afAuth, navCtrl, navParams) {
        this.deploy = deploy;
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.FacebookAuthProvider()).then(function (res) {
            console.log(res);
            if (res) {
                _this.facebook_log = true;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/login/login.html"*/'<ion-content class="background">\n\n    <ion-card>\n\n        <ion-card-header>\n            <img src="./assets/logofire.png" style="margin-left: 90px; width: 135px; height: 140px; position: relative;">\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list no-line>\n\n                <ion-item>\n                    <ion-input type="text" [(ngModel)]="user.email" placeholder="Username"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="password" [(ngModel)]="user.password" placeholder="Password"></ion-input>\n                </ion-item>\n                \n                <!--<a>Olvido su clave? <b>Obtenga ayuda aqui!</b></a> -->\n\n                <button ion-button block outline color="light" (tap)="login(user)">Log in</button>\n\n                <button ion-button block color="facebook" (tap)="loginFacebook()"> \n                <ion-icon name="logo-facebook"></ion-icon> Login with facebook\n            </button>\n            </ion-list>\n\n        </ion-card-content>\n    </ion-card>\n    <button class="bottom" ion-button clear full color="light" (click)="goRegister()">Register</button>\n</ion-content>'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["b" /* Deploy */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function (user) {
        try {
            var result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
            this.navCtrl.pop();
        }
        catch (e) {
            console.error(e);
        }
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/register/register.html"*/'<ion-content class="background">\n\n    <ion-card>\n\n        <ion-card-header>\n            <img src="./assets/fire.png" style="margin-left: 70px; width: 180px; height: 175px; position: relative;">\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list no-line>\n\n                <ion-item>\n                    <ion-input type="text" [(ngModel)]="user.email" placeholder="Email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type="password" [(ngModel)]="user.password" placeholder="Password"></ion-input>\n                </ion-item>\n            \n                <button ion-button block outline color="light" (tap)="register(user)">Registrar</button>\n\n\n             \n    \n            </ion-list>\n\n        </ion-card-content>\n    </ion-card>\n   	   <button class="bottom"  ion-button clear full (click)="goBack()">Regresar a Principal</button>\n</ion-content>'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_orders__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebase_service_firebase_service__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(firebaseService, modalCtrl, afAuth, toast, navCtrl, navParams, database) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.firestore = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
        this.imagesRef = this.firestore.child('listingimages');
        this.listado = [];
        this.arreglo = [];
        this.ban = false;
        this.listingRef$ = this.database.list('listings', { query: {
                orderByKey: true
            } });
        this.firebaseService.af.authState.subscribe(function (data) {
            if (data) {
                _this.name = data.displayName;
                _this.uid = data.uid;
                console.log("ID" + _this.uid);
                _this.ban = true;
            }
            else {
                console.log(" NADA DATA");
                _this.ban = false;
            }
        });
        this.listingRef$.subscribe(function (xy) {
            _this.listado = xy;
            _this.listado.forEach(function (element) {
                var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref();
                storageRef.child(element.path).getDownloadURL().then(function (url) {
                    _this.imgsource = url;
                    //this.listado[i].image = this.imgsource;
                    _this.it = {
                        'image': _this.imgsource,
                        'id': element.id,
                        'stock': element.stock,
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
        this.firebaseService.searchQuery(this.uid).subscribe(function (orders) {
            _this.total = 0;
            _this.orders_list = orders;
            for (var i = 0; i < _this.orders_list.length; i++) {
                if (_this.orders_list[i].order_ban == 1) {
                    _this.total++;
                }
            }
        });
    };
    HomePage.prototype.details = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            image: item.image,
            title: item.title,
            id: item.id,
            stock: item.stock,
            description: item.description,
            price: item.price
        });
        modal.present();
    };
    HomePage.prototype.orders = function () {
        console.log("ORDERS");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__orders_orders__["a" /* OrdersPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/home/home.html"*/'<ion-header>\n <ion-navbar color="dark">\n    <ion-title>\n    </ion-title>\n    <!--	<ion-buttons end>\n    			<button ion-button icon-only (click)="orders()">\n    			<ion-icon name="ios-cart" ></ion-icon> {{total}}\n    			</button>\n    	</ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n  <ion-content>\n    \n    <ion-grid>\n            <ion-row>\n                <ion-col col-4 col-md-4 col-xl-4 *ngFor="let item of arreglo">\n                 <img src="{{item.image}}" (click)="details(item)"/>\n                 <div class="card-subtitle">{{item.description}}</div><br>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    \n   \n   \n\n</ion-content>\n\n<!--\n<table style="width:100%">\n    <tr>\n      <th>Firstname</th>\n      <th>Lastname</th> \n      <th>Age</th>\n    </tr>\n    <tr>\n      <td>Jill</td>\n      <td>Smith</td> \n      <td>50</td>\n    </tr>\n    <tr>\n      <td>Eve</td>\n      <td>Jackson</td> \n      <td>94</td>\n    </tr>\n  </table>\n-->\n\n<!--\nion-content padding>\n<ion-segment [(ngModel)]= "galleryType"># \n<ion-segment-button value="regular">\nRegular\n</ion-segment-button>\n<ion-segment-button value="pinterest">\n    Pinteres\n</ion-segment-button>\n</ion-segment>\n\n<div [ngSwitch]="galleryType">\n\n<ion-grid *ngSwitchCase="\'regular\'">\n    <ion-row>\n        <ion-col  col-6 col-md-4 col-xl-3 *ngFor="let item of arreglo">\n         <img src="{{item.image}}" (click)="details(item)"/>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n</div>\n\n</ion-content>\n\n-->'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* Generated class for the DetailsPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/


var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, viewCtrl, loadingCtrl, firebaseService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.firebaseService = firebaseService;
        this.ban = false;
        this.user_data = {
            profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
            name_surname: 'Can Delibas',
            username: 'candelibas',
            website: 'https://github.com/candelibas',
            description: 'Software developer, open-source lover & Invoker spammer',
            email: 'candelibas00@gmail.com',
            phone: '',
            gender: 'male'
        };
        this.firebaseService.af.authState.subscribe(function (data) {
            if (data) {
                _this.name = data.displayName;
                _this.uid = data.uid;
                console.log("ID" + _this.uid);
                _this.ban = true;
            }
            else {
                console.log(" NADA DATA");
                _this.ban = false;
            }
        });
        this.item = {
            id: navParams.get('id'),
            image: navParams.get('image'),
            title: navParams.get('title'),
            description: navParams.get('description'),
            price: navParams.get('price'),
        };
        this.id = this.item.id;
        console.log("ID " + this.id);
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.listing = listing;
            console.log(listing);
            //Store Ref
            var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
            var spaceRef = storageRef.child(_this.listing.path);
            storageRef.child(_this.listing.path).getDownloadURL().then(function (url) {
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    }
    DetailsPage.prototype.updateProfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            duration: 200
        });
        loader.present().then(function () { return _this.navCtrl.pop(); }); // Get back to profile page. You should do that after you got data from API
    };
    DetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firebaseService.searchQuery(this.uid).subscribe(function (orders) {
            _this.total = 0;
            _this.orders_list = orders;
            for (var i = 0; i < _this.orders_list.length; i++) {
                if (_this.orders_list[i].order_ban == 1) {
                    _this.total++;
                }
            }
        });
    };
    DetailsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetailsPage.prototype.buy = function (listing, ima) {
        console.log("IMAGEN " + ima.value);
        this.listing.uid = this.uid;
        this.listing.image = ima.value;
        this.firebaseService.addOrders(listing);
        this.navCtrl.pop();
    };
    DetailsPage.prototype.increment = function () {
    };
    DetailsPage.prototype.decrement = function () {
    };
    DetailsPage.prototype.orders = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orders_orders__["a" /* OrdersPage */]);
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/details/details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start left>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ listing.title}}</ion-title>\n\n   <!--<ion-buttons end>\n    			<button ion-button icon-only>\n    			<ion-icon name="ios-cart" (click)="orders()"></ion-icon> {{total}}\n    			</button>\n    	</ion-buttons>-->\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content >\n\n  <!-- Profile picture -->\n  \n    <img src="{{imageUrl}}" class="edit-avatar" alt="">\n      <input type="hidden"  value="{{imageUrl}}" name="imagen" #ima>\n\n\n\n\n<ion-grid>\n  <ion-row>\n\n \n  	 <!--   <ion-col col-1>\n    	<button ion-button icon-only (click)="descrement()">\n        <ion-icon name="ios-remove"></ion-icon>\n      </button>\n          </ion-col>\n            <ion-col col-2>\n       			<h2 class="item_num"> {{ listing.qty}} </h2>\n       		</ion-col>\n       	  <ion-col col-1>\n       	<button ion-button icon-only (click)="increment()">\n        <ion-icon name="ios-add" ></ion-icon>\n      </button>\n    \n    </ion-col >\n     <ion-col col-5>\n  </ion-col>-->\n  \n   	<!--<ion-col col-4>\n   	</ion-col>\n   	     <ion-col col-3>\n         <span style="font-size: 35px;  margin-left: 35px">  <ion-icon name="ios-cart"   (click)="buy(listing, ima)" color="facebook"></ion-icon></span>\n    </ion-col>-->\n  </ion-row>\n  </ion-grid>\n\n  <!--\n  <ion-item padding>\n    <ion-label> \n      <ion-icon name="clipboard" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" value="{{ listing.title}}"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> \n      <ion-icon name="quote" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" value="{{ listing.description}}"></ion-input>\n  </ion-item>\n   -->\n\n\n <!--  <ion-item>\n    <ion-label>\n      <ion-icon name="ios-cash" color="gray"></ion-icon>\n    </ion-label>\n    <ion-textarea placeholder="" value="{{ listing.price}}"></ion-textarea>\n  </ion-item>-->\n\n  <!-- Private information form -->\n <!-- <div margin-top padding-top padding>\n    <h4 no-margin no-padding class="info-text">Private Information</h4>\n    <hr class="custom-hr" color="gray">\n  </div>\n  \n  <!-- <ion-item>\n    <ion-label> \n      <ion-icon name="mail" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label> \n      <ion-icon name="phone-portrait" color="gray"></ion-icon>\n    </ion-label>\n    <ion-input type="text" [value]="user_data.phone" placeholder="Add your phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      <ion-icon name="transgender" color="gray"></ion-icon>\n    </ion-label>\n    <ion-select class="custom-select" [(ngModel)]="user_data.gender">\n      <ion-option value="male">Male</ion-option>\n      <ion-option value="female">Female</ion-option>\n      <ion-option value="none">Not Specified</ion-option>\n    </ion-select>\n  </ion-item> -->\n\n</ion-content>'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/details/details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_resume__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

var CheckoutPage = (function () {
    function CheckoutPage(firebaseService, navCtrl, navParams) {
        this.firebaseService = firebaseService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ban = false;
        this.id = this.navParams.get('uid');
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.firebaseService.getCheckout(this.id).subscribe(function (listing) {
            _this.suma = 0;
            //console.log("RESUMENT "+JSON.stringify(listing));
            _this.orders_list = listing;
            //console.log("TAMNANO"+listing.length);
            if (_this.orders_list.length == 0) {
                _this.suma = 0;
            }
            else {
                for (var i = 0; i < _this.orders_list.length; i++) {
                    if (_this.orders_list[i].order_price != null) {
                        _this.suma = parseInt(_this.suma) + parseInt(_this.orders_list[i].order_price);
                    }
                    _this.estatus = _this.orders_list[i].$value;
                }
                console.log("TOTAL " + _this.suma);
            }
        });
    };
    CheckoutPage.prototype.onCheckout = function (id) {
        console.log(" AQUI " + JSON.stringify(id));
        var order = 0;
        var ids = 0;
        for (var i = 0; i < id.length - 1; i++) {
            order = id[i].$key;
            ids = id[i].id_order;
            id = id[i].ids_ord;
            console.log("  IIIIIIDDDD " + ids + " ID " + id);
            //	this.firebaseService.passOrder(id[i].ids_ord, id[i].id_order);
        }
        console.log("ID S" + ids);
        this.firebaseService.statusPay(ids);
        //this.firebaseService.passOrder(id, ids);
        var d = {
            id_pay: ids,
            id_order: order
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__resume_resume__["a" /* ResumePage */], { dato: d });
    };
    CheckoutPage.prototype.onReverse = function (id) {
        console.log(" AQUI " + JSON.stringify(id));
        for (var i = 0; i < id.length; i++) {
            console.log(" ID " + id[i].id_order);
            this.firebaseService.reverseOrder(id[i].ids_ord);
            this.firebaseService.deleteResume(id[i].id_order);
        }
        this.navCtrl.pop();
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/checkout/checkout.html"*/'<ion-header>\n <ion-navbar color="primary">\n    <ion-title>\n     CheckOut\n    </ion-title>\n    	<ion-buttons end>\n    			<button ion-button icon-only>\n    			 <ion-icon name="person-add"></ion-icon>\n    			</button>\n    	</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n<ion-list>\n  <ion-item  *ngFor="let listing of orders_list" >\n\n\n\n    \n      \n\n     <ion-row>\n      <ion-col col-8>\n    <p>{{listing.title}} </p>\n    <p>{{listing.description}}</p>\n     <p class="stock" *ngIf="listing.qty">Qty: {{listing.qty}}</p>\n      </ion-col>\n\n    <ion-col col-2>\n     \n      <h2 class="price" *ngIf="listing.order_price" >$ {{listing.order_price}}</h2>\n    </ion-col>\n\n\n  \n  </ion-row>\n    \n\n  \n\n  \n\n  \n   \n  </ion-item>\n</ion-list>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar color="secondary">\n\n   <ion-row>\n      <ion-col col-3>\n    \n    </ion-col>\n    <ion-col col-6>\n     <div class="qty" >Total: $ {{suma}}  </div> \n    </ion-col>\n     <ion-col col-2>\n    \n    </ion-col>\n    </ion-row>\n\n     <ion-row>\n    <ion-col col-6>\n        <button ion-button round class="reverse" color="remove" (click)="onReverse(orders_list)"> Reverse &nbsp;  <ion-icon name="remove-circle"></ion-icon>\n		</button>\n    </ion-col>\n     <ion-col col-6>\n        <button ion-button round class="confirm" (click)="onCheckout(orders_list)"> Confirm &nbsp;  <ion-icon name="checkmark-circle"></ion-icon>\n		</button>\n    </ion-col>\n       \n    </ion-row>\n    \n    \n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/checkout/checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
/**
 * Generated class for the ResumePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResumePage = (function () {
    function ResumePage(firebaseService, navCtrl, navParams) {
        this.firebaseService = firebaseService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ban = false;
    }
    ResumePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dat = this.navParams.get('dato');
        console.log("RECIBE " + this.dat.id_pay);
        this.firebaseService.getCheckout(this.dat.id_pay).subscribe(function (listing) {
            _this.total = 0;
            _this.qty = 0;
            console.log("RESUMENT " + JSON.stringify(listing));
            _this.orders_list = listing;
            //console.log("TAMNANO"+listing.length);
            if (_this.orders_list.length == 0) {
                _this.total = 0;
            }
            else {
                for (var i = 0; i < _this.orders_list.length; i++) {
                    if (_this.orders_list[i].order_price != null) {
                        _this.total = parseInt(_this.total) + parseInt(_this.orders_list[i].order_price);
                        _this.qty = parseInt(_this.qty) + parseInt(_this.orders_list[i].qty);
                    }
                    _this.status = _this.orders_list[i].$value;
                }
                console.log("TOTAL " + _this.total);
            }
        });
    };
    return ResumePage;
}());
ResumePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resume',template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/resume/resume.html"*/'<!--\n  Generated template for the ResumePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Finish</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n 		\n 		\n 		\n\n 		<ion-list>\n  <ion-item >\n\n    \n\n     <ion-row>\n    <ion-col col-5>\n       Status: \n        <ion-badge color="primary" *ngIf="status">Quequed</ion-badge>\n 		    <ion-badge color="secondary" *ngIf="!status">Done</ion-badge>\n\n    </ion-col>\n\n    <ion-col col-3>\n       \n       <div style="margin-left: 10px;"> Qty: {{qty}} </div>\n    </ion-col>\n\n       <ion-col col-4>\n  \n 		 <div> Total: {{total }}</div>\n    </ion-col>\n  </ion-row>\n    \n   \n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/pages/resume/resume.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ResumePage);

//# sourceMappingURL=resume.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(591);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_details__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checkout_checkout__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_resume_resume__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__firebase_credentials__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service_firebase_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_cloud_angular__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var cloudSettings = {
    'core': {
        'app_id': '46b8d598'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_resume_resume__["a" /* ResumePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_orders_orders__["a" /* OrdersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_resume_resume__["a" /* ResumePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/santiagobernalbetancourth/Desktop/AppRest/RestListApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirebaseServiceProvider = (function () {
    function FirebaseServiceProvider(database, af) {
        this.database = database;
        this.af = af;
        this.folder = "listingimages";
        this.items = this.database.list('/listings', { preserveSnapshot: true });
        this.orders = this.database.list('/orders');
        this.pay = this.database.list('/pay');
    }
    FirebaseServiceProvider.prototype.searchQuery = function (id) {
        this.ord = this.database.list('/orders', {
            query: {
                orderByChild: 'uid',
                equalTo: id
            }
        });
        return this.ord;
    };
    FirebaseServiceProvider.prototype.searchCheck = function (id) {
        this.check = this.database.list('/pay/' + id);
        return this.check;
    };
    FirebaseServiceProvider.prototype.removeOrders = function (id) {
        var t = id;
        console.log("VARIABLE " + t);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + t).once('value').then(function (snapshot) {
            console.log(" SNAPSHPOT" + JSON.stringify(snapshot.val()));
            if (snapshot.val() != null) {
                console.log("SI ESTA");
                var cantidad = snapshot.val().stock;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + t).remove();
            }
            else {
                console.log("NO ESTA ELIMINAMOS");
            }
            // ...
        });
    };
    FirebaseServiceProvider.prototype.deleteResume = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).remove();
    };
    FirebaseServiceProvider.prototype.passOrder = function (id, id_pay) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log("SI ESTA");
                /*firebase.database().ref('/orders/'+id).update({
                     order_ban: 0
                }); */
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).remove();
                //  firebase.database().ref('/pay/'+id_pay).remove();
            }
            else {
                console.log("NO ESTA");
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).remove();
                //   firebase.database().ref('/pay/'+id_pay).remove();
                // firebase.database().ref('/pay/'+d).set(listing);
            }
        });
    };
    FirebaseServiceProvider.prototype.statusPay = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log("SI ESTA" + id);
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).update({
                    status: 1
                });
            }
            else {
                console.log("NO ESTA" + id);
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).update({
                    status: 1
                });
                // firebase.database().ref('/pay/'+d).set(listing);
            }
        });
    };
    FirebaseServiceProvider.prototype.reverseOrder = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log("SI ESTA");
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).update({
                    order_ban: 1
                });
            }
            else {
                console.log("NO ESTA");
                // firebase.database().ref('/pay/'+d).set(listing);
            }
        });
    };
    FirebaseServiceProvider.prototype.checkout = function (listing) {
        var d = listing[0].ids_ord;
        console.log(" T " + d);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + d).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log("SI ESTA" + listing.length);
            }
            else {
                console.log("NO ESTA" + listing.length);
                // firebase.database().ref('/pay/'+d).set(listing);
            }
        });
    };
    FirebaseServiceProvider.prototype.addPay = function (listing) {
        var d = listing[0].uid;
        console.log(" T " + d);
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + d).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                console.log("SI ESTA" + listing.length);
                for (var i = 0; i < listing.length; i++) {
                    var ord = {
                        id_order: d,
                        uid_order: listing[i].uid,
                        ids_ord: listing[i].id,
                        qty: listing[i].stock,
                        status: 0,
                        title: listing[i].title,
                        price: listing[i].price,
                        order_price: listing[i].order_price,
                        description: listing[i].description
                    };
                    //firebase.database().ref('/pay/'+listing[i].uid).push(ord);
                }
            }
            else {
                var id = listing[0].uid;
                console.log("NO ESTA" + listing.length);
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).set({
                    status: 0
                });
                for (var i = 0; i < listing.length; i++) {
                    var ord = {
                        id_order: d,
                        uid_order: listing[i].uid,
                        ids_ord: listing[i].id,
                        qty: listing[i].stock,
                        status: 0,
                        title: listing[i].title,
                        price: listing[i].price,
                        order_price: listing[i].order_price,
                        description: listing[i].description
                    };
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/pay/' + id).push(ord);
                }
                // firebase.database().ref('/pay/'+d).set(listing);
            }
        });
    };
    FirebaseServiceProvider.prototype.addOrders = function (listing) {
        var t = listing.id;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + t).once('value').then(function (snapshot) {
            // console.log(" SNAPSHPOT"+JSON.stringify(snapshot.val()));
            if (snapshot.val() != null) {
                console.log("SI ESTA");
                var cantidad = snapshot.val().stock;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + t).update({
                    stock: cantidad + 1
                });
            }
            else {
                console.log("NO ESTA");
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + t).set({
                    title: listing.title,
                    id: listing.id,
                    image: listing.image,
                    path: listing.path,
                    description: listing.description,
                    price: listing.price,
                    order_price: listing.price,
                    type: listing.type,
                    uid: listing.uid,
                    order_ban: 1,
                    status: 1,
                    stock: 1
                });
            }
            // ...
        });
    };
    FirebaseServiceProvider.prototype.activado = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                var status = snapshot.val().status;
                if (status == 1) {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).update({
                        status: 0
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).update({
                        status: 1
                    });
                }
            }
            else {
                console.log("CAMBIO DE STATUS");
            }
            // ...
        });
    };
    FirebaseServiceProvider.prototype.increment = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                var qty = snapshot.val().stock + 1;
                var price = snapshot.val().price;
                var order_price = price * qty;
                __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).update({
                    stock: qty,
                    order_price: order_price,
                    price: price
                });
            }
            else {
                console.log("NO ESTA ELIMINAMOS");
            }
            // ...
        });
    };
    //decrement
    FirebaseServiceProvider.prototype.decrement = function (id) {
        __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('orders/' + id).once('value').then(function (snapshot) {
            if (snapshot.val() != null) {
                var qty = snapshot.val().stock - 1;
                var price = snapshot.val().price;
                var order_price = snapshot.val().order_price - price;
                if (qty <= 0) {
                    // this.removeOrders(id);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/orders/' + id).update({
                        stock: qty,
                        order_price: order_price,
                        price: price
                    });
                }
            }
            else {
                console.log("NO ESTA ELIMINAMOS");
            }
            // ...
        });
    };
    FirebaseServiceProvider.prototype.getOrders = function () {
        return this.orders;
    };
    FirebaseServiceProvider.prototype.getListings = function () {
        return this.items;
    };
    FirebaseServiceProvider.prototype.updateListing = function (id, item) {
        return this.items.update(id, item);
    };
    FirebaseServiceProvider.prototype.deleteListing = function (id) {
        return this.items.remove(id);
    };
    FirebaseServiceProvider.prototype.getListingDetails = function (id) {
        this.item = this.database.object('/listings/' + id);
        return this.item;
    };
    FirebaseServiceProvider.prototype.getCheckout = function (id) {
        return this.database.list('/pay/' + id);
        // return this.p;
    };
    FirebaseServiceProvider.prototype.addListing = function (item) {
        //create root ref
        var _this = this;
        //let code = (<HTMLInputElement>document.getElementById('imagen')).src;
        var storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["storage"]().ref();
        var _loop_1 = function (selectedFile) {
            var path = "/" + this_1.folder + "/" + selectedFile.name;
            var iRef = storageRef.child(path);
            iRef.put(selectedFile).then(function (snapshot) {
                item.image = selectedFile.name;
                item.path = path;
                //item.code = code;
                _this.database.database.ref('listings/' + item.id).set(item);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = [document.getElementById('image').files[0]]; _i < _a.length; _i++) {
            var selectedFile = _a[_i];
            _loop_1(selectedFile);
        }
    };
    return FirebaseServiceProvider;
}());
FirebaseServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], FirebaseServiceProvider);

//# sourceMappingURL=firebase-service.js.map

/***/ })

},[586]);
//# sourceMappingURL=main.js.map