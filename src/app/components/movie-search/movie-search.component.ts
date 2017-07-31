import { Component, OnInit } from '@angular/core';
import {FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  movies: any[];
  title:string;
  flag: boolean = false;

 
 
  ngOnInit() {
    

      }

}
