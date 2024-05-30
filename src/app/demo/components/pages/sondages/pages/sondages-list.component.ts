import { Component, OnInit } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';

@Component({
    templateUrl: './sondages-list.component.html',
    styleUrls: ['./sondages-list.component.scss']
})
export class SondagesListComponent implements OnInit {


    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    
    
    constructor() { }

    ngOnInit() {
        
    }

}
