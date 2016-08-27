import { Injectable } from '@angular/core';

@Injectable()
export class BinarySearchService {

     binaryIndex(arrayToSearch: any[], searchElement) {

        var minIndex = 0;
        var maxIndex = arrayToSearch.length - 1;
        var currentIndex;
        var currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = arrayToSearch[currentIndex];

            if (currentElement < searchElement) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > searchElement) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }

        return -1;
    }
    
}
