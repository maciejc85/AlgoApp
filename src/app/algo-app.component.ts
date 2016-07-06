import { Component } from '@angular/core';
import { Stack, StackComponent } from './components/stack/stack.component'
import { BinarySearchService } from './components/binarySearch/binarySearch'
import { MergeSortService } from './components/mergeSort/mergeSort'
import { SidenavComponent } from './components/sidenav/sidenav'
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button'
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar'

@Component({
  moduleId: module.id,
  selector: 'algo-app-app',
  templateUrl: 'algo-app.component.html',
  styleUrls: ['algo-app.component.css'],
  directives: [StackComponent, MD_GRID_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, SidenavComponent],
  providers:[BinarySearchService, MergeSortService]
})
export class AlgoAppAppComponent {

  constructor(private binarySearch: BinarySearchService, private mergeSort: MergeSortService){
    var result = this.binarySearch.binaryIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10)
    var result1 = this.mergeSort.mergeSort([12,211,22,14,15,26,17,82,91,110,11,1,13,14,15])
  }

  title = 'Algorithms';
  algo: Algorithm = {
    id: 1,
    name: 'Stack'
  };

  public algos = algos;

  onSelect(algo: Algorithm) {
    
  };



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