import { Component, Input } from '@angular/core';
@Component({
  selector: 'sidenav',
  templateUrl: 'app/components/sidenav/sidenav.html',
  styleUrls: ['app/components/sidenav/sidenav.css']
})
export class SidenavComponent {

navItems: NavItem[] = [
  { "id": 11, "name": "Stack" },
  { "id": 12, "name": "Queue" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
}

export class NavItem{
  id: number;
  name: string;
}

