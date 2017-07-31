import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Movie } from '../interfaces/movie'


@Injectable()
export class FirebaseService {
          movies: FirebaseListObservable<any[]>;
          movie: FirebaseObjectObservable<any>;
          titles: FirebaseListObservable<any[]>;
          term: string = 'Incep';
  constructor(private af: AngularFire) { }
  
   getMovies()
      {
        this.movies = this.af.database.list('/movies') as FirebaseListObservable<Movie[]>;
        return this.movies; 
      }

    getMovieDetails(id)
    {
      this.movie = this.af.database.object('/movies/'+id) as FirebaseObjectObservable<Movie>;
      return this.movie;
    }

    
    searchMovies()
    {
      this.movies = this.af.database.list('/movies',{
        query: {
          orderByChild: 'title',
          startAt: this.term,
          endAt: this.term + "\uf8ff",
          value: 'once'
        }
      } ) as FirebaseListObservable<Movie[]>;
      return this.movies;
    }

}
