import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

  constructor(public angularFire: AngularFire) { }

  login(){
    this.angularFire.auth.login();
  }

  ngOnInit() {
  }

}
