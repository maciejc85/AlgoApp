import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AlgoAppAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/algo-app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AlgoAppAppComponent, [
  APP_ROUTER_PROVIDERS
]);

