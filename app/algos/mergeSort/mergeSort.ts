import { Injectable } from '@angular/core';

@Injectable()
export class MergeSortService {

    mergeSort(items) {

        //1. 0 or 1 item arrays don't need sorting
        if (items.length < 2) {
            return items;
        }
        //2. split the array in to left and right halfs
        var middle = Math.floor(items.length / 2),
            left = items.slice(0, middle),
            right = items.slice(middle);
        
        //3. sort left and right and merge the sorted arrays
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    private merge(left, right) {
            var result = [],
                il = 0, //current index for left array
                ir = 0; //current index for right array
            
            //loop until one array is fully parsed
            while (il < left.length && ir < right.length) {
                if (left[il] < right[ir]) { //compare the element at index for left and right array, take the smaller item
                    result.push(left[il++]); //if left is smaller, add it to the output array
                } else {
                    result.push(right[ir++]); // if right is smaller, add it to the output array
                }
            }
            //take the parsed result and add the remaining SORTED left or right array, this will result in a fully sorted final array
            return result.concat(left.slice(il)).concat(right.slice(ir)); 
    }

}
