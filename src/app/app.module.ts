import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";



import { FIREBASE_CREDENTIALS} from './firebase.credentials';

import { MyApp } from './app.component';
import { UtilListPage } from '../pages/util-list/util-list';
import { AddUtilPage} from '../pages/add-util/add-util';



@NgModule({
  declarations: [
    MyApp,
    UtilListPage,
    AddUtilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UtilListPage,
    AddUtilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
