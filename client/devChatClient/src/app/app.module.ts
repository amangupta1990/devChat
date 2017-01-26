import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Home } from '../pages/home/home';
import { NewForm } from '../pages/newForm/newForm';
import { Discussions } from '../pages/discussions/discussions';
import {Feathers } from '../providers/feathers';
import {AutoComplete } from '../providers/autocomplete';
import {ElasticModule} from 'angular2-elastic';
import {MomentModule} from 'angular2-moment';
 import { AUTOCOMPLETE_DIRECTIVES, AUTOCOMPLETE_PIPES } from 'ionic2-auto-complete'; 
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home,
    Discussions,
    NewForm,
    AUTOCOMPLETE_DIRECTIVES,
    AUTOCOMPLETE_PIPES
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ElasticModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home,
    Discussions,
    NewForm
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Feathers,AutoComplete]
})
export class AppModule {}
