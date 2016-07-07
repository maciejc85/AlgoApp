import { Component, Input } from '@angular/core';

@Component({
  selector: 'details',
  templateUrl: 'app/components/details/details.html',
  styleUrls: ['app/components/details/details.css'],
  directives: []
})
export class DetailsComponent {
public algos = algos;
}

export class Algorithm {
  id: number;
  name: string;
}

var algos: Algorithm[] = [
  { "id": 11, "name": "Stack" },
  { "id": 12, "name": "Queue" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];