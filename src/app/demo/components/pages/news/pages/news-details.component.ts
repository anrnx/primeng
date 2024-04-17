import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

    newsDetails: News; 
    uuid: string;

    constructor(private newsService: NewsService, private route: ActivatedRoute, public messageService: MessageService, private router: Router ) { }

    ngOnInit() {   
        this.uuid = this.route.snapshot.params['uuid'];
        this.newsService.getNewsDetails(this.uuid).subscribe((data: any) => {
            this.newsDetails = data;
        })
    }

    updateSuccess() {
        
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'News changed' });
    }

    updateFail(error) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    deleteSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'News deleted' });
    }

    deleteFail(error) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    saveNewsDetails() {
        this.newsDetails.pictures = [];
        this.newsDetails.files = [];
        this.newsService.patchNewsDetails(this.uuid, this.newsDetails).subscribe((data: any) => {
            this.newsDetails = data; 
            this.updateSuccess();
            this.router.navigate(['pages/news']);    
        }, error => {
            this.updateFail(error);
        });
    }

    deleteNews() {
        this.newsService.deleteNews(this.uuid).subscribe((data: any) => {
            this.deleteSuccess();
            this.router.navigate(['pages/news']);    
        }, error => {
            this.deleteFail(error);
        });
    }
}
