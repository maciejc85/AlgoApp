import { Component } from '@angular/core';
import { Stack, StackComponent } from './components/stack/stack.component'
import { BinarySearchService } from './components/binarySearch/binarySearch'
import { MergeSortService } from './components/mergeSort/mergeSort'
import { SidenavComponent } from './components/sidenav/sidenav'

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button'
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar'
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'algo-app-app',
  templateUrl: 'algo-app.component.html',
  styleUrls: ['algo-app.component.css'],
  directives: [StackComponent, MD_SIDENAV_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, SidenavComponent, ROUTER_DIRECTIVES],
  providers:[BinarySearchService, MergeSortService]
})
export class AlgoAppAppComponent {

  constructor(private binarySearch: BinarySearchService, private mergeSort: MergeSortService){
    var result = this.binarySearch.binaryIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10)
    var result1 = this.mergeSort.mergeSort([12,211,22,14,15,26,17,82,91,110,11,1,13,14,15])
  }

  title = 'AlgoApp';
}

