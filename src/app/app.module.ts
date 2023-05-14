import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {ActivatedRouteSnapshot, CanActivateFn, RouterModule, UrlTree} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TextGroupByPatchResolver, TextPageGroupComponent} from "@solenopsys/ui-publications";
import {createNgxs} from "@solenopsys/fl-storage";
import {environment} from "../environments/environment";
import {LeftMenuLayoutComponent} from "./left-menu-layout/left-menu-layout.component";
import {BaseLayoutComponent} from "./base-layout/base-layout.component";
import {UINavigateModule} from "@solenopsys/ui-navigate";
import {UIFormsModule} from "@solenopsys/ui-forms";
import {MainPageComponent, RoadMapComponent, UITemplatesModule} from "@solenopsys/ui-templates";

export function AllowedEntitiesGuard(allowedEntities: string[]): CanActivateFn {
    return (route: ActivatedRouteSnapshot): boolean | UrlTree => {
        const currentUrl = route.url;
        if (currentUrl.toString().endsWith('/')) {
            return true;
        }
        return false;
    };
}

function createRoute(section: string, sectionId: string) {
    return {
        path: section,
        component: LeftMenuLayoutComponent, children: [{
            path: "**",
            component: TextPageGroupComponent, resolve: {
                groups: TextGroupByPatchResolver
            },
            data: {rootId: sectionId}
        }
        ],
        data: {rootId: sectionId}
    };
}

@NgModule({
    declarations: [
        AppComponent,
        RoadMapComponent,
        LeftMenuLayoutComponent,
        BaseLayoutComponent,

    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: "solenopsys"}),
        BrowserModule,
        RouterModule.forRoot([
            {
                path: "",
                component: BaseLayoutComponent,
                children: [{
                    path: "",
                    component: MainPageComponent
                }, createRoute("docs", "bafyreiex6h53h3dckkozu44xfdq2g3ez7yt5ojrxfvhagke6yg7co6c7fe"),
                    createRoute("community", "bafyreig7p5xff3j32i6wzmconoyeggmrbbmi75ab74coepe6ji5m6svw5e"),
                    createRoute("ecosystem", "bafyreiakcsqjgpxzevinxdfjrtgdhcaaw4xtax7u7cc7txnnjdbtxhezbi")]
            },
        ], {initialNavigation: "enabledBlocking"}),


        UINavigateModule,
        ...createNgxs(!environment.production, [], true),
        UIFormsModule,
        UITemplatesModule,
    ],
    providers: [{provide: "assets_dir", useValue: ""}],
    bootstrap: [AppComponent]
})
export class AppModule {
}



