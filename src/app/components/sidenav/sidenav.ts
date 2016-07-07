import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: 'app/components/sidenav/sidenav.html',
  styleUrls: ['app/components/sidenav/sidenav.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SidenavComponent {

navItems: NavItem[] = [
  { "id": 0, "name": "Dashboard", "route" : "dashboard" },
  { "id": 11, "name": "Stack" , "route" : "" },
  { "id": 12, "name": "Queue", "route" : "" },
  { "id": 13, "name": "Bombasto", "route" : "" },
  { "id": 14, "name": "Celeritas" , "route" : ""},
  { "id": 15, "name": "Magneta" , "route" : ""},
  { "id": 16, "name": "RubberMan" , "route" : ""},
  { "id": 17, "name": "Dynama" , "route" : ""},
  { "id": 18, "name": "Dr IQ", "route" : "" },
  { "id": 19, "name": "Magma" , "route" : ""},
  { "id": 20, "name": "Tornado" , "route" : ""}
];
}

export class NavItem{
  id: number;
  name: string;
  route: string;
}

