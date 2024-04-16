import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';

@Component({
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

    newsList: News[] = []; 

    constructor(private newsService: NewsService) { }

    ngOnInit() {   
        this.newsService.getNewsList().subscribe((data: any) => {
            this.newsList = data;
        });
    }
}
