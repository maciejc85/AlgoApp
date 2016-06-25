import { Injectable } from '@angular/core';

@Injectable()
export class QuickSortService {

    //same as JS native sort()
    quicksort(arr: any[]) {
        //if array is empty
        if (arr.length === 0) {
            return []; //return the empty array back
        }
        //create left, right and the pivot point
        var left = [];
        var right = [];
        var pivot = arr[0];
        //go through each element in array
        for (var i = 1; i < arr.length; i++) { // loop throught the array
            if (arr[i] < pivot) { //array item is less than pivot value
                left.push(arr[i]); // add to left array
            } else { //array item is greater than pivot value
                right.push(arr[i]); // add to right array
            }
            //quicksort left and right and combine
            return this.quicksort(left).concat(pivot, this.quicksort(right));
        }
    }
}