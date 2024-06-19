import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';

import * as L from 'leaflet';
L.Icon.Default.imagePath = 'assets/leaflet/';


@Component({
    templateUrl: './shopping-add.component.html',
    styleUrls: ['./shopping-add.component.scss']
})
export class ShoppingAddComponent implements OnInit {
  private map!: L.Map
  markers: L.Marker[] = [
    L.marker([31.9539, 35.9106]), // Amman
    L.marker([32.5568, 35.8469]) // Irbid
  ];

  constructor() { }

  ngOnInit() {
    this.initializeMap();
    this.addMarkers();
    this.centerMap();
  }


  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }


  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    
    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}
