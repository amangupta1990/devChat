import { Component } from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  selectedItem: any;
  icons: string[];
   private user : any;
   private profile: any;
   private newSubject:string;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private feathers:Feathers) {
    this.user = this.feathers.user;
    this.profile = this.feathers.profile;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }

  addNewSubject(){
    this.profile.subjects.push(this.newSubject);
  }
  removeSubject(i){
    this.profile.subjects.splice(i,1);
  }
  saveProfileSettings(){
    let data = {subjects:this.profile.subjects};
    this.feathers.updateProfile(data).then(updatedProfile=>{
      this.profile = updatedProfile;
      this.navCtrl.pop();
    },error=>{
      alert("error")
    })
  }
}
