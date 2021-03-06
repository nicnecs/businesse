import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpModule} from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from "@ionic-native/http/ngx";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AutocompletePage} from './autocomplete/autocomplete.page';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
// import {NativeGeocoder} from '@ionic-native/native-geocoder';

import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Import ionic-rating module
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  declarations: [AppComponent, AutocompletePage],
  entryComponents: [AutocompletePage],
  imports: [IonicStorageModule.forRoot() ,BrowserModule, HttpModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), StarRatingModule,
  ],
  providers: [
    
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileTransferObject,
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
