import { Component, ViewChild } from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController, NavParams } from 'ionic-angular';
import {AutoComplete } from '../../providers/autocomplete';
@Component({
  selector: 'new-form',
  templateUrl: 'newForm.html'
})
export class NewForm {
   @ViewChild('tagSearch') searchbar: any;
  selectedItem: any;
  icons: string[];
   private title : string;
   private body: string;
   private topics: string[];
   private newTopic:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,private feathers:Feathers, private autoComplete:AutoComplete) {
  this.topics = [];

   
  }
   addTopic(){
     let topic = this.searchbar.getValue();
    this.topics.push(topic);
    this.searchbar.clearValue();
  }
  removeTopic(i){
    this.topics.splice(i,1);
  }
  

}
