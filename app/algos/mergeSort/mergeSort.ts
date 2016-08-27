import { Injectable } from '@angular/core';

@Injectable()
export class MergeSortService {

    mergeSort(items) {

        //0 or 1 item arrays don't need sorting
        if (items.length < 2) {
            return items;
        }

        var middle = Math.floor(items.length / 2),
            left = items.slice(0, middle),
            right = items.slice(middle);

        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }

    private merge(left, right) {
        var result = [],
            il = 0,
            ir = 0;

        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

}
