import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AlgoAppAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AlgoAppAppComponent);

