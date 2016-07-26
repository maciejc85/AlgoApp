import { Component, Input } from '@angular/core';
import {HighlightDirective} from '../../shared/highlight.directive'


@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css', 'app/components/home/bootstrap.css'],
  directives: [HighlightDirective]
})
export class HomeComponent {

  constructor(){}

}