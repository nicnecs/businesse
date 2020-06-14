import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Platform,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
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
  autocompleteItems: any[];
  autocomplete: { input: string; };
  GoogleAutocomplete: any;
  zone: any;
  geocoder: any;
  markers: any[];

  

  
  constructor(public http: Http,public navCtrl: NavController,private geolocation : Geolocation,
    public plt: Platform,
    public router: Router
    ) { 
      // this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
      
    }
    

    



    // location(){
    //   this.geolocation.getCurrentPosition().then((resp) => {
    //     // resp.coords.latitude
    //     // resp.coords.longitude
    //     this.dataLoc='Lat: ' +resp.coords.latitude + ' ' + 'Lng: ' + resp.coords.longitude 
    //     console.log('Lat: ' +resp.coords.latitude + ' ' + 'Lng: ' + resp.coords.longitude)
    //    }).catch((error) => {
    //      console.log('Error getting location', error);
    //    });
    // }
    ionViewDidEnter() {
      // this.map = new google.maps.Map(document.getElementById('map'), {
      //   center: { lat: -34.9011, lng: -56.1645 },
      //   zoom: 10
      // });
    }
   
    // loadmap() {
    //   this.map = leaflet.map("map").fitWorld();
    //   leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18
    //   }).addTo(this.map);
    //   this.map.locate({
    //     setView: true,
    //     maxZoom: 10
    //   }).on('locationfound', (e) => {
    //     let markerGroup = leaflet.featureGroup();
    //     let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
    //       alert('Marker clicked');
    //     })
    //     markerGroup.addLayer(marker);
    //     this.map.addLayer(markerGroup);
    //     }).on('locationerror', (err) => {
    //       alert(err.message);
    //   })
   
    // }


    updateSearchResults(){
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
    }

    selectSearchResult(item){
      this.clearMarkers();
      this.autocompleteItems = [];
    
      this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
        if(status === 'OK' && results[0]){
          let position = {
              lat: results[0].geometry.location.lat,
              lng: results[0].geometry.location.lng
          };
          // let marker = new google.maps.Marker({
          //   position: results[0].geometry.location,
          //   map: this.map,
          // });
          this.markers.push(marker);
          this.map.setCenter(results[0].geometry.location);
        }
      })
    }
 
    tryGeolocation(){
      this.clearMarkers();
      this.geolocation.getCurrentPosition().then((resp) => {
        let pos = {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        };
        // let marker = new google.maps.Marker({
        //   position: pos,
        //   map: this.map,
        //   title: 'I am here!'
        // });
        this.markers.push(marker);
        this.map.setCenter(pos);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

  clearMarkers() {
    //this.geocoder = new google.maps.Geocoder;
    this.markers = [];
  }




 
  ionViewDidLoad(){
   
  }



  
  ngOnInit() {
  }
  
}
