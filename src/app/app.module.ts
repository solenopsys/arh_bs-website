import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TextGroupByPatchResolver, TextPageGroupComponent } from "@solenopsys/ui-publications";
import { createNgxs } from "@solenopsys/fl-storage";
import { environment } from "../environments/environment";
import { MainPageComponent } from "./main-page/main-page.component";
import { RoadMapComponent } from "./road-map/road-map.component";
import { TopPanelComponent } from "./top-panel/top-panel.component";
import { LeftMenuLayoutComponent } from "./left-menu-layout/left-menu-layout.component";
import { DoListComponent } from "./do-list/do-list.component";
import { View3DComponent } from "./view3-d/view3-d.component";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";


function createRoute(section: string, sectionId: string) {
  return {
    path: section,
    component: LeftMenuLayoutComponent, children: [{
      path: "**",
      component: TextPageGroupComponent, resolve: {
        groups: TextGroupByPatchResolver
      },
      data: { rootId: sectionId }
    }
    ],
    data: { rootId: sectionId }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RoadMapComponent,
    TopPanelComponent,
    LeftMenuLayoutComponent,
    DoListComponent,
    View3DComponent,
    BaseLayoutComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: "solenopsys" }),
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: BaseLayoutComponent,
        children: [{
          path: "",
          component: MainPageComponent
        }, createRoute("docs", "0x55735"),
          createRoute("community", "0x4a04c"),
          createRoute("ecosystem", "0x5574a")]
      },
    ], { initialNavigation: "enabledBlocking" }),

    UiNavigateModule,
    ...createNgxs(!environment.production, [], true),
    UiFormsModule
  ],
  providers: [{ provide: "assets_dir", useValue: "" }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
