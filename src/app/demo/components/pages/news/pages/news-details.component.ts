import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';

@Component({
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

    newsDetails: News; 
    uuid: string;

    constructor(private newsService: NewsService, private route: ActivatedRoute) { }

    ngOnInit() {   
        this.uuid = this.route.snapshot.params['uuid'];
        this.newsService.getNewsDetails(this.uuid).subscribe((data: any) => {
            this.newsDetails = data;
        });
    }

    saveNewsDetails() {
        this.newsService.patchNewsDetails(this.uuid, this.newsDetails).subscribe((data: any) => {
            this.newsDetails = data;
        });
    }
}
