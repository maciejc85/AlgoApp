import { Component, Input } from '@angular/core';
import { MergeSortService } from './../../algos/mergeSort/mergeSort'


@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [],
  providers: [MergeSortService]
})
export class HomeComponent {

  constructor(private mergeSort: MergeSortService){}

  items = [2,3,4,534,10,45,1]

  sortedItems = this.mergeSort.mergeSort(this.items);

}