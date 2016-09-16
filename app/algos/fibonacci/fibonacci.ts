import { Injectable } from '@angular/core';

@Injectable()
export class FibonacciService {

    loopFibonacci(y: number) {
        var i;
        var fib = [];
        //populate the first two
        fib[0] = 0;
        fib[1] = 1;
        //start looping
        for (i = 2; i <= y; i++) {
            // Next fibonacci number = previous + one before previous
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib;
    }
    
    recursiveFibonacci(n: number) {
        if (n < 1) 
            return 0; //first number in the sequence is 0
        else if (n <= 2) 
            return 1; //second number in the sequence is 1
        else
            this.recursiveFibonacci(n - 1) + this.recursiveFibonacci(n - 2); //otherwise 'compute' the prior two numbers
    }

}