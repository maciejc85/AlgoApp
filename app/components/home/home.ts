import { Component, Input, OnInit } from '@angular/core';
import { MergeSortService } from './../../algos/mergeSort/mergeSort'
import { RandomNumbersService } from './../../helpers/number.service'

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [],
  providers: [MergeSortService, RandomNumbersService]
})
export class HomeComponent implements OnInit {

  items = [];
  sortedItems = [];

  constructor(private mergeSort: MergeSortService, private randomNumbers: RandomNumbersService){
  }

  ngOnInit(){

    this.items = this.randomNumbers.randomNumberArray(1000);

    this.sortedItems = this.mergeSort.mergeSort(this.items);
  }


}