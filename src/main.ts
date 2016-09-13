import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { AppModule } from './app';

platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
