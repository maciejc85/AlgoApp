import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import {FirebaseListObservable } from 'angularfire2';

import { SearchService } from './search.service';
import {MovieFactoryService} from '../../shared/movieFactory';

@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.html',
    styleUrls: ['app/components/search/search.css', 'app/components/search/bootstrap.css'],
    providers: [SearchService, MovieFactoryService]
})

export class SearchComponent implements OnInit {

    dbMovies: FirebaseListObservable<any[]>;
    search: SearchItem = new SearchItem();

    constructor(private movieFactory: MovieFactoryService, private searchService: SearchService) { }

    ngOnInit() {
        this.dbMovies = this.movieFactory.getMovies();
        this.dbMovies.subscribe(response => console.log(response));
    }
    
    onSubmit() {
        this.searchService.searchMovies(this.search.searchQuery)
            .subscribe(
            response => {
                this.search.response = this.movieFactory.mapMovie(response);
                this.dbMovies.push(response);
            },
            error => { this.search.error = <any>error; console.log(error);});
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




