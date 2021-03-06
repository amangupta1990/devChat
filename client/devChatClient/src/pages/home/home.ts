import { Component } from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController, NavParams } from 'ionic-angular';
import {Page2 } from '../page2/page2';
import {NewForm} from '../newForm/newForm';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  selectedItem: any;
  icons: string[];
   private user : any;
   private profile: any;
   private newSubject:string;
   private discussions:any[];
   
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private feathers:Feathers) {
    this.user = this.feathers.user;
    this.profile = this.feathers.profile;

     // fetch discussions :
     feathers.app.service('discussions').find().then(discussions=>{
       this.discussions = discussions.data; 
     });

   /* if(this.profile.subjects.length == 1 )
    // prompt the user to update their profile settings;
     this.navCtrl.push(Page2, {
         
    }).then(_=>{ this.profile = this.feathers.profile;});*/
   
  }
 
  newDiscussion(){
    this.navCtrl.push(NewForm).then((newPost)=>{ })
  }

}
