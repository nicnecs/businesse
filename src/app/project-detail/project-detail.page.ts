import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params["id"];
      this.getData(id);
    });
  }

  getData(id) {
    for (let project of this.Json) {
      if(project.id == id) {
        this.data = project;
        console.log(this.data)
        break;
      }
    }
  }

  data = {}

  Json = [
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
      "partners" : [
        {
          "partnerId" : 1,
          "partner" : "Last, first name",
        },
        {
          "partnerId" : 2,
          "partner" : "Last, first name",
        },
        {
          "partnerId" : 3,
          "partner" : "Last, first name",
        }
      ],
      "deadline" : "17.02.2020",
      "reward": 1000,
      "count_partner": 3,
      "state" : "green"
    },
    {
      "id" : 2,
      "name" : "Zweites Projekt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "category" : "Web",
      "picture" : "https://qph.fs.quoracdn.net/main-qimg-4b8caf5d3d267084b06c2530ba54820e",
      "planned_start" : "01.02.2020",
      "planned_end" : "17.02.2020",
      "real_start": "01.02.2020",
      "real_end" : "17.02.2020",
      "deadline" : "17.02.2020",
      "partners" : [
        {
          "partnerId" : 1,
          "partner" : "Last, first name",
        }
      ],
      "reward": 2000,
      "count_partner": 1,
      "state" : "blue"
    },
    {
      "id" : 3,
      "name" : "Derittes Projekt",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "category" : "Android",
      "picture" : "https://qph.fs.quoracdn.net/main-qimg-4b8caf5d3d267084b06c2530ba54820e",
      "planned_start" : "01.02.2020",
      "planned_end" : "17.02.2020",
      "real_start": "01.02.2020",
      "real_end" : "17.02.2020",
      "deadline" : "17.02.2020",
      "partners" : [{}],
      "reward": 500,
      "count_partner": 0,
      "state" : "orange",
    }
  ]

  ngOnInit() {
    
  }

}
