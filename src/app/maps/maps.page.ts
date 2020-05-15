import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Platform,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  dataLoc:string='';
  @ViewChild('map',{static: true}) mapContainer: ElementRef;
  map: any;

  users = 
  
  [
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Informatik",
      "company" : "TeaSausage24",
      "img" : "./assets/project/1/workplace.png",
      "filter" : "Neuste Einträge"
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "company" : "Microsoft",
      "img" : "./assets/project/1/workplace.png",
      "filter" : "Neuste Einträge"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "Informatik",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "filter" : "Standort"
    },
    {
      "id" : 5,
      "name" : "Ein cooles Projekt",
      "category" : "Gebäudereinigung",
      "company" : "TeaSausage24",
      "img" : "./assets/project/1/workplace.png"
      , "filter" : "Bewertung"
    },
    {
      "id" : 29,
      "name" : "Super cooles Projekt",
      "category" : "Handwerk",
      "img" : "./assets/project/1/workplace.png",
      "company" : "Microsoft",
      "filter" : "Bezahlung"
    },
    {
      "id" : 19000,
      "name" : "Super Duper cooles Projekt",
      "category" : "Rohbau",
      "company" : "Apppple",
      "img" : "./assets/project/1/workplace.png",
      "frist" : "17.02.2020",
      "project-start" : "20.02.2020",
      "filter" : "Bezahlung"
    }
  ];  

  
  constructor(public http: Http,public navCtrl: NavController,private geolocation : Geolocation,
    public plt: Platform,
    public router: Router) { }
    

    location(){
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.dataLoc='Lat: ' +resp.coords.latitude + ' ' + 'Lng: ' + resp.coords.longitude 
        console.log('Lat: ' +resp.coords.latitude + ' ' + 'Lng: ' + resp.coords.longitude)
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }
    ionViewDidEnter() {
      this.loadmap();
    }
   
    loadmap() {
      this.map = leaflet.map("map").fitWorld();
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      }).addTo(this.map);
      this.map.locate({
        setView: true,
        maxZoom: 10
      }).on('locationfound', (e) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
          alert('Marker clicked');
        })
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
        }).on('locationerror', (err) => {
          alert(err.message);
      })
   
    }
 




 
  ionViewDidLoad(){
   
  }



  
  ngOnInit() {
  }
  
}
