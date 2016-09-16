import { Component, Input, OnInit } from '@angular/core';
import { MergeSortService } from './../../algos/mergeSort/mergeSort'
import { FibonacciService} from './../../algos/fibonacci/fibonacci'

import { RandomNumbersService } from './../../helpers/number.service'

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [MergeSortService, RandomNumbersService, FibonacciService]
})
export class HomeComponent implements OnInit {

  items = [];
  sortedItems = [];

  constructor(private mergeSort: MergeSortService, private randomNumbers: RandomNumbersService, private fibonacci: FibonacciService){
  }

  ngOnInit(){

    this.items = this.randomNumbers.randomNumberArray(1000);

    //this.sortedItems = this.mergeSort.mergeSort(this.items);

    this.sortedItems = this.fibonacci.loopFibonacci(100);
  }


}