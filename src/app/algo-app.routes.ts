import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent }  from './components/dashboard/dashboard';
import {DetailsComponent} from './components/details/details'

export const routes: RouterConfig = [
  { path: '', component: DetailsComponent },
  { path: 'dashboard', component: DashboardComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];