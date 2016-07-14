import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { SearchService } from './search.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.html',
    styleUrls: ['app/components/search/search.css', 'app/components/search/bootstrap.css'],
    providers: [SearchService]
})

export class SearchComponent {

    constructor(private searchService: SearchService, af : AngularFire) { 
        this.dbMovies = af.database.list('movies');

        this.dbMovies.subscribe(response => console.log(response));
        
    }
    dbMovies : any;
    search: SearchItem = new SearchItem();
    searchHistory : Movie[] = [];
    data = false;

    onSubmit() {
        this.searchService.searchMovies(this.search.searchQuery)
            .subscribe(
            response => { this.data = true; 
                          this.search.response = new Movie(response.imdbID, response.Title, response); 
                          this.searchHistory[this.searchHistory.length] = this.search.response;
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

