import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { SearchService } from './search.service';
import {MovieFactoryService} from '../../shared/movieFactory'

@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.html',
    styleUrls: ['app/components/search/search.css', 'app/components/search/bootstrap.css'],
    providers: [SearchService, MovieFactoryService]
})

export class SearchComponent {

    constructor(private movieFactory: MovieFactoryService, private searchService: SearchService, private af : AngularFire) { 
        this.dbMovies = af.database.list('movies');

        this.dbMovies.subscribe(response => console.log(response));
        
    }
    dbMovies : FirebaseListObservable<any[]>;
    search: SearchItem = new SearchItem();
    data = false;

    onSubmit() {
        this.searchService.searchMovies(this.search.searchQuery)
            .subscribe(
            response => { this.data = true; 
                          //this.search.response = new Movie(response.imdbID, response.Title, response); 
                          this.search.response = this.movieFactory.makeMovie(response);

                          //this.searchHistory[this.searchHistory.length] = this.search.response;
                          //const itemObservable = this.af.database.object('movies'); 
                          //itemObservable.set(this.search.response);

                          this.dbMovies.push(response);
                        },
            error => this.search.error = <any>error);
    }


};

export class SearchItem {
    searchQuery: string;
    response: any;
    error: string;
    constructor() {
        this.searchQuery = '';
        this.response = {};
        this.error = '';
    }

}


export class Movie {
    id: number;
    name: string;
    response: {};

    constructor(id: number, name: string, response: {}) {
        this.id = id;
        this.name = name;
        this.response = response;
    }
}

