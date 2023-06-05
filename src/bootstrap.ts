import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {WebSiteModule} from '@solenopsys/fl-website';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(WebSiteModule)
    .catch((err) => console.error(err));
