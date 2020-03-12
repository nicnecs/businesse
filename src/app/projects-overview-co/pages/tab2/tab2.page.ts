import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor() { }
  data = [
    {
      "id" : 1,
      "name" : "Erstes Projekt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "category" : "IOS",
      "picture" : "https://qph.fs.quoracdn.net/main-qimg-4b8caf5d3d267084b06c2530ba54820e",
      "planned_start" : "01.02.2020",
      "planned_end" : "17.02.2020",
      "real_start": "01.02.2020",
      "real_end" : "17.02.2020",
      "deadline" : "17.02.2020",
      "partner" : "Last, first name",
      "partnerId" : 1,
      "count_provider": 3,
      "state" : "green"
    }]
  ngOnInit() {
  }

}
