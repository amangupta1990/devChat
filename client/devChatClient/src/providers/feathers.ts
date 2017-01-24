import { Injectable, EventEmitter } from '@angular/core';
import { Http , RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
declare var io,feathers,window;
/*
  Generated class for the Feathers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Feathers {
public nav = new EventEmitter <Object>();

public  socket:any;
public app:any;
private host:string;
public user:any;
public profile:any;
  constructor(public http: Http) {
    this.host = window.location.hostname+":3030";
    // Establish a Socket.io connection
 this.socket = io(this.host);
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
this.app = feathers()
  .configure(feathers.socketio(this.socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));
  }

  navigate(page,data){
    this.nav.emit({page:page,data:data});
  }

  signup(form){
        let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve,reject)=>{

    this.app.service('users').create(form).then(user=>{
      // store the user profile 
      this.user = user;
      // fetch the profile and save it as well;
      this.app.service('profiles').find({email:this.user.email}).then(profile=>{
        debugger;
       this.profile=  profile.data.find(p =>{ return p.email == this.user.email}); resolve(true);},error=>{reject(error)})

    } , error =>{ reject(error)}
      );
    
    });

}
  authenticate(){
    return new Promise((resolve,reject)=>{
     this.app.authenticate().then(user=>{
      // store the user profile 
      this.user = user.data;
      // fetch the profile and save it as well
      this.app.service('profiles').find({email:this.user.email}).then(profile=>{
        this.profile = profile.data.find(p =>{ return p.email == this.user.email});
         resolve(true);},
        error=>{reject(error)})

    } , error =>{ reject(error)}
      );
      })
  }

login(login){
  return new Promise((resolve,reject)=>{
       this.app.authenticate({
  type: 'local',
  'email': login.email,
  'password': login.password
    }).then(user=>{
      // store the user profile 
      this.user = user.data;

      // fetch the profile and save it as well

      this.app.service('profiles').find({email:this.user.email}).then(profile=>{

       this.profile= profile.data.find(p =>{ return p.email == this.user.email});
         resolve(true);},error=>{reject(error)})

    } , error =>{ reject(error)}
      );
  })
}
 
 logout(){


     this.app.logout();
     this.navigate('Page One',null);


 }

updateProfile(data){
  return new Promise((resolve,reject)=>{
    this.app.service('profiles')
    .patch(this.profile._id,data)
    .then(profile=>{
      this.profile =  profile; resolve(profile) },error=>{ reject(error)})
  });
}

}
