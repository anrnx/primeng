import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './news-add.component.html',
    styleUrls: ['./news-add.component.scss'],
})
export class NewsAddComponent implements OnInit {

    newsAdd: News = {title: null, description: null};
    uuid: string;

    constructor(private newsService: NewsService, private router: Router, public messageService: MessageService) { }

    ngOnInit() {   
    
    }
    
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'News added' });
    }

    showError(error) {
        
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    save() {
        this.newsAdd.pictures = [];
        this.newsAdd.files = [];
        
        this.newsService.postNews(this.newsAdd).subscribe((data: any) => {
            this.showSuccess();
            this.router.navigate(['pages/news']);            
        }, error => {
            this.showError(error);
        });
    }}
