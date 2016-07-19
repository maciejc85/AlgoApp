import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs/Rx'
import { FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2'
import {MovieFactoryService} from '../../shared/movieFactory'
import { Movie } from '../../models/movie'
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'detail',
  templateUrl: 'app/components/details/details.html',
  styleUrls: ['app/components/details/details.css', 'app/components/search/bootstrap.css'],
  directives: [],
  providers: [MovieFactoryService]
})

export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieFactory: MovieFactoryService) { }

  movie: any;


  private sub: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      //need one movie here
      let dbMovie = this.movieFactory.getMovies().map(movies => movies[0]);
      dbMovie.subscribe(response => {
        console.log(response);
        this.movie = response;
      });
    })

  }


}

