import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';


import * as L from 'leaflet';
L.Icon.Default.imagePath = 'assets/leaflet/';

import JSONEditor from 'jsoneditor';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, AfterViewInit {

  //google maps
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,

  };

  //  leaflet
   selectedMapOption: any;

    mapOptions = [
        {label:'GOOGLE MAPS'},
        {label:'GEOPORTAIL'}
    ]

    provider = new OpenStreetMapProvider();
    
    searchControl = GeoSearchControl({
      provider: this.provider,
    });

    private map;

  private initMap(): void {

    
    this.map = L.map('map', {
      center: [49.5997179,6.1333447],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.addControl(this.searchControl);
  }




  constructor() { }

  ngOnInit() {
    //google maps
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  ngAfterViewInit(): void { 
    this.initMap();
    

  }

  //google maps

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }
 
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }


}
