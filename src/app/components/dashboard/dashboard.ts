import { Component, Input, OnInit } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import {MovieFactoryService} from '../../shared/movieFactory';
import { FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
  styleUrls: ['app/components/dashboard/dashboard.css'],
  directives: [MD_GRID_LIST_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [MovieFactoryService]
})
export class DashboardComponent implements OnInit{

  dbMovies : FirebaseListObservable<any[]>

  constructor(private movieFactory : MovieFactoryService){}

  ngOnInit(){
    this.dbMovies = this.movieFactory.getMovies();
        this.dbMovies.subscribe(response => console.log(response));
  }

}