import { Component, OnInit } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public angularFire: AngularFire,
  public flashmessageService: FlashMessagesService) { }

  login(){
    this.angularFire.auth.login();
  }

  logout() {
     this.angularFire.auth.logout();
     this.flashmessageService.show('You have been logged out successfully', 
     {cssClass: 'alert-success', timeout: 3000});
  }

  ngOnInit() {
  }

}
