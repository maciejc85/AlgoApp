import { Component, Input } from '@angular/core';
@Component({
  selector: 'stack',
  templateUrl: 'app/components/stack/stack.component.html',
  styleUrls: ['app/components/stack/stack.component.css']
})
export class StackComponent {
  item:Node

  stack:Stack;

  push(item:string){
    if(this.stack){
      this.stack.push(item);
    }

  }
}

export class Stack {

  private first: Node;

  constructor(item: Node) {
    this.first = item;
  }

  pop() {
    this.first = this.first.next;
  };

  push(item: string) {
    var oldFirst:Node = this.first;
    this.first = new Node(item,oldFirst);
  };

  isEmpty() {
    return (this.first);
  };
}

export class Node {
  item: string;
  next: Node;
  constructor(item: string, next: Node) {
    this.item = item;
    this.next = next;
  }
}