import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cs-do-list",
  templateUrl: "./do-list.component.html",
  styleUrls: ["./do-list.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class DoListComponent implements OnInit {

  list: { title: string, link: string }[] = [
    { title: "Скачать платформу для упрощения разработки своих проектов.",link:"bla" },
    { title: "Создать свой проект найти:   инвесторов, команду,  заказчиков.",link:"bla" },
    { title: "Защитить и монетизировать свою  интеллектуальную собственность.",link:"bla" },
    { title: "Инвестировать в венчурные проекты и интеллектуальную собственность.",link:"bla" },
    { title: "Покупать, продавать и предоставлять свои услуги.",link:"bla" },
    { title: "Участвовать в создании новой технологической инфраструктуры.",link:"bla" },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }
}
