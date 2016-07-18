import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import 'rxjs/Rx'
import { FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2'
import {MovieFactoryService} from '../../shared/movieFactory'
import { Movie } from '../../models/movie'
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'details',
  templateUrl: 'app/components/details/details.html',
  styleUrls: ['app/components/details/details.css'],
  directives: [],
  providers: [MovieFactoryService]
})

export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private movieFactory: MovieFactoryService) { }

  private sub: any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      //let id = +params['id'];
      //need one movie here
      let dbMovies: Observable<Movie[]> = this.movieFactory.getMovies();
      dbMovies.subscribe(response => { console.log(response);
      });
    })

  }


}

