import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumbersService {


    randomNumberArray(amount: number) {

        let items = [];
        //fill with random numbers
        for (var i=0, t=amount; i<t; i++) {
            items.push(Math.round(Math.random() * t))
        }

        return items;
    }


}
