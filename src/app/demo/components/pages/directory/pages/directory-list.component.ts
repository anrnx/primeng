import { Component, OnInit } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';

@Component({
    templateUrl: './directory-list.component.html',
    styleUrls: ['./directory-list.component.scss']
})
export class DirectoryListComponent implements OnInit {

    directoryList: Directory[] = [];

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    
    constructor(private directoryService: DirectoryService) { }

    ngOnInit() {
        this.loading = true;
        this.currentPage = 1;
        this.directoryService.dataSourceDirectoryList(this.currentPage, this.rowsPerPage, null).subscribe((data: any) => {
            this.totalRecords = data.headers.get('X-Total-Count');
            this.directoryList = data.body;
            this.loading = false;
        }, error => {this.loading = false;});

        this.matchModeOptions = [
            {label:'Contains', value: FilterMatchMode.CONTAINS}
        ];
    }

    onPageChange(event: any) {
        this.loading = true;
        this.currentPage = event.first != 0 ? (event.first / this.rowsPerPage) +1 : 1;
        this.directoryService.dataSourceDirectoryList(this.currentPage, this.rowsPerPage, event.filters).subscribe((data: any) => {
            this.totalRecords = data.headers.get('X-Total-Count');
            this.directoryList = data.body;
            this.loading = false;
        }, error => {this.loading = false;});
      }
}
