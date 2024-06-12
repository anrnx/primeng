import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';

import * as L from 'leaflet';

@Component({
    templateUrl: './marques-add.component.html',
    styleUrls: ['./marques-add.component.scss']
})
export class MarquesAddComponent implements OnInit{


    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
 

    private map;

    private initMap(): void {
        this.map = L.map('map', {
        center: [ 39.8282, -98.5795 ],
        zoom: 3
        });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
    
    constructor() { }

    ngOnInit(): void {  
        this.initMap();
    }

}
