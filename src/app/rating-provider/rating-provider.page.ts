import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-rating-provider',
  templateUrl: './rating-provider.page.html',
  styleUrls: ['./rating-provider.page.scss'],
})
export class RatingProviderPage implements OnInit {

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
      "provider" : 
        {
          "provider_id" : 1,
          "name" : "provider name",
          "stars": "0"
        },
    },
    {
      "project_id" : 2,
      "provider" : 
        {
          "provider_id" : 1,
          "name" : "provider name",
          "stars": "0"
        },
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

  logRatingChange(rating, provider){
    console.log("changed rating: ",rating, "for provider", provider);
    provider.stars = rating;
  }

}
