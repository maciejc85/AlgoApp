import { Component, Input, OnInit } from '@angular/core';

import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import {MovieFactoryService} from '../../shared/movieFactory';
import { FirebaseListObservable } from 'angularfire2'

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: [MD_GRID_LIST_DIRECTIVES],
  providers: [MovieFactoryService]
})
export class DashboardComponent implements OnInit{

  dbMovies : FirebaseListObservable<any[]>

  constructor(private movieFactory){}

  ngOnInit(){
    this.dbMovies = this.movieFactory.getMovies();
        this.dbMovies.subscribe(response => console.log(response));
  }

}