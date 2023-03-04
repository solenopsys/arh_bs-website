import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {MenuItemData} from "@solenopsys/ui-navigate";


@Component({
  selector: "sc-top-panel",
  templateUrl: "./top-panel.component.html",
  styleUrls: ["./top-panel.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopPanelComponent  {
  menu: MenuItemData[] = [{
    name: "Документация", link: "docs"
  },
    {
      name: "Сообщество", link: "community"
    }, {
      name: "Экосистема", link: "ecosystem"
    }

  ];


}
