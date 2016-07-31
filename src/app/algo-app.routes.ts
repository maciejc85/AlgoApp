import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent }  from './components/dashboard/dashboard';
import {DetailsComponent} from './components/details/details'
import { HomeComponent } from './components/home/home'
import { SearchComponent } from './components/search/search'

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/details/:id', component: DetailsComponent },
  { path: 'dashboard/details/:id', component: DetailsComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];