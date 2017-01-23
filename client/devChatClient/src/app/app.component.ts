import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Feathers } from '../providers/feathers';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Page1) loginPage: Page1;
  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform ,private feathers:Feathers) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];

    // check for navigation 



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();


     this.feathers.app.authenticate().then(user =>{
       this.openPage(this.pages[1])
     },err=>{
       console.log(err);
       this.openPage(this.pages[0]);
       
     });
     this.feathers.nav.subscribe(page => {
       debugger;
        var pageObj = this.pages.find(pages=>{ return pages.title == page.page});
        this.openPage(pageObj);
     });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
