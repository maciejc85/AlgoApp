import { Injectable }     from '@angular/core';
import { Movie } from '../models/movie'

@Injectable()
export class MovieFactoryService {

    constructor() { }

    makeMovie(movie: any): Movie {
        let newMovie = new Movie();
        try {
            newMovie.id = movie.id;
            newMovie.title = movie.title;
            newMovie.awards = movie.awards;
            newMovie.country = movie.country;
            newMovie.director = movie.director;
            newMovie.genre = movie.genre;
            newMovie.language = movie.genre;
            newMovie.metascore = movie.metascore;
            newMovie.plot = movie.plot;
            newMovie.poster = movie.poster;
            newMovie.rated = movie.rated;
            newMovie.released = movie.released;
            newMovie.response = movie.response;
            newMovie.runtime = movie.runtime;
            newMovie.type = movie.type;
        }
        catch (e) {
            this.handleError(e);
        }
        return newMovie;
    }
    private handleError(error: any) {

    }
}