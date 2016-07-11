import { Component, Input } from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: 'app/components/details/details.html',
  styleUrls: ['app/components/details/details.css'],
  directives: []
})
export class DetailsComponent {

  item = {
    id: '',
    name: {
      first: 'Nancy',
      last: 'Drew'
    },
    description: {
      short: '',
      long: ''
    },


  };
}

