import '@angular/platform-server/init';
import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
console.log("START MAIN")
if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
