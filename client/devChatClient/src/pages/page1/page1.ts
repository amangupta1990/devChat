import { Component , EventEmitter, Output} from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:[]
})
export class Page1 {

 private login:any = {};
  constructor(public navCtrl: NavController,private feathers: Feathers) {
    
  }
  submit(){
    this.feathers.app.authenticate({
  type: 'local',
  'email': this.login.email,
  'password': this.login.password
}).then((result)=>{
  
   this.feathers.navigate('Page Two',null);

  console.log('Authenticated!', result);
  
}).catch(function(error){
  console.error('Error authenticating!', error);
});
  }
}
