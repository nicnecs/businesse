import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

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

@NgModule({
  declarations: [AppComponent, AutocompletePage],
  entryComponents: [AutocompletePage],
  imports: [BrowserModule, HttpModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileTransferObject,
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
