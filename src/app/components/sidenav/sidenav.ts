import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: 'app/components/sidenav/sidenav.html',
  styleUrls: ['app/components/sidenav/sidenav.css'],
  directives: [ROUTER_DIRECTIVES],
  animations: [
    trigger('navLinkState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class SidenavComponent {

  navItems: NavItem[] = [
    new NavItem(0, "Home", "home", "inactive"),
    new NavItem(1, "Dashboard", "dashboard", "inactive"),
    new NavItem(2, "Details", "details", "inactive"),
    new NavItem(3, "Search", "search", "inactive")
  ];

  onSelect = function (item: any) { }

};

export class NavItem {


  constructor(public id: number, public name: string, public route: string, public state = 'inactive') {
  }

  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}

