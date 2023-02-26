import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MenuItemData } from "@solenopsys/ui-layouts";
import { GroupService } from "@solenopsys/ui-publications";
import { ActivatedRoute } from "@angular/router";
import { firstValueFrom, map } from "rxjs";

@Component({
  selector: "sol-left-menu-layout",
  templateUrl: "./left-menu-layout.component.html",
  styleUrls: ["./left-menu-layout.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftMenuLayoutComponent {
  mobileMenu = false;


  menu: MenuItemData[];

  constructor(private conf: GroupService, private activatedroute: ActivatedRoute) {
      let rootId = this.activatedroute.snapshot.data["rootId"];
      this.conf.loadMenu(rootId).then(menu => {
        this.menu = menu;
      });
  }


}
