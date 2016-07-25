import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AlgoAppAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/algo-app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';



if (environment.production) {
  enableProdMode();
}

bootstrap(AlgoAppAppComponent, [
  APP_ROUTER_PROVIDERS, HTTP_PROVIDERS, FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({ 
    apiKey: "AIzaSyC2qgp2Kbe6KSNEAYf4NI4KfMtgTVmT6X0",
    authDomain: "movie-spy-b15c0.firebaseapp.com",
    databaseURL: "https://movie-spy-b15c0.firebaseio.com",
    storageBucket: "movie-spy.appspot.com",
  })
]);