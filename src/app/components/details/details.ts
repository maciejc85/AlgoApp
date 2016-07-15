import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2'
import {MovieFactoryService} from '../../shared/movieFactory'

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
      let dbMovies: FirebaseListObservable<any> = this.movieFactory.getMovies();
      dbMovies.subscribe(response => { console.log(response); 
      });
    })

  }


}

