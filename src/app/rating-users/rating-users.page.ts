import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating-users.page.html',
  styleUrls: ['./rating-users.page.scss'],
})
export class RatingPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params["id"];
      this.getData(id);
    });
  }
  data = {}
  Json = [
    {
      "project_id" : 1,
      "partners" : [
        {
          "partnerId" : 1,
          "firstname" : "John",
          "lastname" : "meyer",
          "stars": "0"
        },
        {
          "partnerId" : 2,
          "firstname" : "Ralph",
          "lastname" : "Fischer ",
          "stars": "0"
        },
        {
          "partnerId" : 3,
          "firstname" : "weaver",
          "lastname" : "Weber",
          "stars": "0"
        }
      ],
    },
    {
      "project_id" : 2,
      "partners" : [
        {
          "partnerId" : 1,
          "firstname" : "John",
          "lastname" : "meyer",
          "stars": "0"
        }
      ],
    },
  ]

  ngOnInit() {
  }

  getData(id) {
    for (let project of this.Json) {
      if(project.project_id == id) {
        this.data = project;
        break;
      }
    }
  }

  logRatingChange(rating, partner){
    console.log("changed rating: ",rating, "for partner", partner);
    partner.stars = rating;
  }
}
