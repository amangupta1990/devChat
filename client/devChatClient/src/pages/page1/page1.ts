import { Component , EventEmitter, Output} from '@angular/core';
import {Feathers } from '../../providers/feathers';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:[]
})
export class Page1 {
  private logo = '</Dev chaT>';
  private signupForm:any ={};
 private showSignup = false;
 private login:any = {};
  constructor(public navCtrl: NavController,private feathers: Feathers) {
    
  }

toggleSignup(){
  this.showSignup = true;
}

  signup(){
  
    

    this.feathers.signup(this.signupForm).then(success=>{
      
      this.showSignup = false , error =>{ console.log(error);}
    })
  }

  submit(){

    this.feathers.login(this.login)

 .then((result)=>{
  
   this.feathers.navigate('Home',null);

  console.log('Authenticated!', result);
  
}).catch(function(error){
  console.error('Error authenticating!', error);
});
  }
}
