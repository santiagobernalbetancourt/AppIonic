import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ListingPage } from '../pages/listing/listing';
import { HomePage } from '../pages/home/home';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { DetailsPage } from '../pages/details/details';
import { OrdersPage } from '../pages/orders/orders';
import { CheckoutPage } from '../pages/checkout/checkout';

import { ResumePage } from '../pages/resume/resume';

import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase_credentials';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '46b8d598'
  }
};

 
@NgModule({
  declarations: [
    MyApp,
    ListingPage,
    RegisterPage,
    LoginPage,
    HomePage,
    DetailsPage,
    OrdersPage,
    CheckoutPage,
    ResumePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListingPage,
    RegisterPage,
    LoginPage,
    HomePage,
    DetailsPage,
    OrdersPage,
    CheckoutPage,
    ResumePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
