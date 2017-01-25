import { Component } from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'discussions',
  templateUrl: 'discussions.html'
})
export class Discussions {

  selectedItem: any;
  icons: string[];
   private user : any;
   private profile: any;
   private newSubject:string;
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private feathers:Feathers) {

   
  }
 
  

}
