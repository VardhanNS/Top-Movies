import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
})
export class MovieDetailsComponent implements OnInit {

    id: any;
    movie: any;
    imageUrl: any;
    widt= 70;

  constructor(private firebaseService : FirebaseService,
  private router: Router,
  private route: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getMovieDetails(this.id).subscribe(movie =>{
      this.movie = movie;
      console.log(movie);
      //image url
    });
  }

}
