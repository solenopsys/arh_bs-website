




import 'zone.js/dist/zone';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {WebSiteModule} from '@solenopsys/fl-website';
platformBrowserDynamic()
    .bootstrapModule(WebSiteModule)
    .catch((err) => console.error(err));
