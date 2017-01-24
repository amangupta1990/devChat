import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import {Feathers } from '../providers/feathers';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Feathers]
})
export class AppModule {}
