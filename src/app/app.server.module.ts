import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServerModule, } from '@angular/platform-server';
import {AppModule} from "./app.module";

@NgModule({
  imports: [
     AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppServerModule {
}
