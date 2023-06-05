import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WebSiteModule,AppComponent} from "@solenopsys/fl-website";


@NgModule({
    declarations: [
    ],
    imports: [
        HttpClientModule,
        WebSiteModule,
        CommonModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: "solenopsys"}),
        BrowserModule,
        RouterModule.forRoot([

        ], {initialNavigation: "enabledBlocking"}),

    ],
    providers: [
        {provide: "assets_dir", useValue: ""},
        {provide: 'logo', useValue: "solenopsys"},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

