import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MenuItemData } from "@solenopsys/uimatrix-layouts";

@Component({
  selector: "sol-top-panel",
  templateUrl: "./top-panel.component.html",
  styleUrls: ["./top-panel.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopPanelComponent implements OnInit {
  menu: MenuItemData[] = [{
    name: "Документация", link: "docs"
  },
    {
      name: "Сообщество", link: "community"
    }, {
      name: "Экосистема", link: "ecosystem"
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
