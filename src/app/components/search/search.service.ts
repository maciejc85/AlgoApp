import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor (private http: Http) {}

  private searchUrl = 'app/components/search/search.json?v=1'; //'http://www.omdbapi.com/?t=boss&y=2016&plot=full&r=json'; 

  searchMovies (searchQuery : string): Observable<any> {
    return this.http.get(this.searchUrl + '&t=' + searchQuery) 
                    .map(this.extractData);
                    //.catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

