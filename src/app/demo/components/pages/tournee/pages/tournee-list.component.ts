import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, MenuItem } from 'primeng/api';
import { DirectoryService } from 'src/app/demo/service/directory.service';

@Component({
    templateUrl: './tournee-list.component.html',
    styleUrls: ['./tournee-list.component.scss']
})
export class TourneeListComponent implements OnInit {

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    activeItem: MenuItem | undefined;

    
    
    constructor(private directoryService: DirectoryService) { }

    ngOnInit() {
    
    }

    onPageChange(event: any) {
    }
}
