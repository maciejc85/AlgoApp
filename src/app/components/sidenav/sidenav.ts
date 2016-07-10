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
    { "id": 0, "name": "Home", "route" : "home" },
  { "id": 1, "name": "Dashboard", "route" : "dashboard" },
  { "id": 2, "name": "Details" , "route" : "details" }
];

onSelect = function(item: any){}

};

export class NavItem{
  id: number;
  name: string;
  route: string;
}

