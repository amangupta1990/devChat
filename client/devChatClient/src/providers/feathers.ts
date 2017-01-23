import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var io,feathers;
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
  constructor(public http: Http) {
    const host:string = 'http://localhost:3030';
    // Establish a Socket.io connection
 this.socket = io(host);
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

}
