import { Injectable, OnInit}     from '@angular/core';
import { Movie } from '../models/movie'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class MovieFactoryService implements OnInit {

    constructor(private af: AngularFire) { }

    dbMovies: FirebaseListObservable<any[]>;

    ngOnInit() {
        
    }

    getMovies(): FirebaseListObservable<Movie[]> {
        this.dbMovies = this.af.database.list('movies');
        return this.dbMovies;   
    }

    getMovie(id: string): FirebaseObjectObservable<any> {

        let dbMovie =  this.af.database.object('movies'); 
        return dbMovie;
    }

    mapMovie(movie: any): Movie {
        let newMovie = new Movie();
        try {
            newMovie.id = movie.imdbID;
            newMovie.title = movie.Title;
            newMovie.awards = movie.Awards;
            newMovie.country = movie.Country;
            newMovie.director = movie.Director;
            newMovie.genre = movie.Genre;
            newMovie.language = movie.Language;
            newMovie.metascore = movie.Metascore;
            newMovie.plot = movie.Plot;
            newMovie.poster = movie.Poster;
            newMovie.rated = movie.Rated;
            newMovie.released = movie.Released;
            newMovie.response = movie.Response;
            newMovie.runtime = movie.Runtime;
            newMovie.type = movie.Type;
        }
        catch (e) {
            this.handleError(e);
        }
        return newMovie;
    }

    private handleError(error: any) {
        console.log(error);
    }
}