import { Component, ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,private feathers:Feathers, private autoComplete:AutoComplete,public toastCtrl: ToastController) {
  this.title = '';
  this.body = '';  
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
  
  validate(){
    if(this.title.length == 0 || this.body.length== 0 || this.topics.length==0)
    return true;
    else return false;
  }

  submit(){
    let newPost = {
      title: this.title,
      body: this.body,
      subjects: this.topics
    }

      this.navCtrl.pop(newPost).then(_=>{
         this.feathers.app.service('discussions').create(newPost)

    .then(post=>{
      let toast = this.toastCtrl.create({
      message: 'Your post has been crreated',
      duration: 3000
    });
    toast.present();
    })
      });
  }

}
