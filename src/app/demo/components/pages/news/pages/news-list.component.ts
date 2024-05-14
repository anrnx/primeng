import { Component, OnInit } from '@angular/core';
import { FilterMatchMode } from 'primeng/api';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';

@Component({
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

    newsList: News[] = [];

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    items: ({ label: string; icon: string; routerLink: string[]; } | { label: string; icon: string; routerLink?: undefined; })[];
    
    
    constructor(private newsService: NewsService) { }

    ngOnInit() {
        this.items = [
            { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/']},
            { label: 'Directory', icon: 'pi pi-users', routerLink: ['/pages/directory']},
            { label: 'News', icon: 'pi pi-book', routerLink: ['/pages/news']},
        ];
        this.loading = true;
        this.currentPage = 1;
        this.newsService.dataSourceNewsList(this.currentPage, this.rowsPerPage, null).subscribe((data: any) => {
            this.totalRecords = data.headers.get('X-Total-Count');
            this.newsList = data.body;
            this.loading = false;
        }, error => {this.loading = false;});

        this.matchModeOptions = [
            {label:'Contains', value: FilterMatchMode.CONTAINS}
        ];
    }

    onPageChange(event: any) {
        this.loading = true;
        this.currentPage = event.first != 0 ? (event.first / this.rowsPerPage) +1 : 1;
        this.newsService.dataSourceNewsList(this.currentPage, this.rowsPerPage, event.filters).subscribe((data: any) => {
            this.totalRecords = data.headers.get('X-Total-Count');
            this.newsList = data.body;
            this.loading = false;
        }, error => {this.loading = false;});
      }
}
