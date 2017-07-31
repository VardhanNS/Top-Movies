import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { FirebaseService } from './services/firebase.service';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AboutComponent } from './components/about/about.component';
import { BoldTextDirective } from './bold-text.directive';
//import { MovieSearchComponent } from './components/movie-search/movie-search.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBXT97okqljo__PgV5p7SNjDpisesV9vjM',
  authDomain: 'movieratingsystem-68756.firebaseapp.com',
  databaseURL: 'https://movieratingsystem-68756.firebaseio.com',
  storageBucket: 'movieratingsystem-68756.appspot.com',
  messagingSenderId: '299454569839'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const routes: Routes =[
  {path: '', component: HomeComponent },
  {path: 'movies', component: MoviesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent},
 // {path:'movie-search', component: MovieSearchComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    MovieDetailsComponent,
    AboutComponent,
    BoldTextDirective,
    //MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
