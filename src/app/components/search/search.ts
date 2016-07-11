import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { SearchService } from './search.service';

@Component({
    selector: 'search',
    templateUrl: 'app/components/search/search.html',
    styleUrls: ['app/components/search/search.css', 'app/components/search/bootstrap.css' ],
    providers:[SearchService]
})

export class SearchComponent {

    constructor (private searchService: SearchService) {}

    search = {
        id: '',
        title : '',
        response: '',
        error : ''
    };

    onSubmit() { 
        alert(this.search) 
        this.searchService.searchMovies()
                     .subscribe(
                       response => {this.search.response = response;},
                       error =>  this.search.error = <any>error);
    }


};


export class Movie {
    id: number;
    name: string;
    response: string;
}

