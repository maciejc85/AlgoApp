import { Component } from "@angular/core";

import {SidenavComponent } from "./components/sidenav/sidenav";

@Component({
  selector: "my-app",
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ SidenavComponent ]
})
export class AppComponent {
  constructor() { };

  x: any = 2;

}