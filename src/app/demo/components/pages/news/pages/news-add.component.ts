import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './news-add.component.html',
    styleUrls: ['./news-add.component.scss'],
    providers: [MessageService]
})
export class NewsAddComponent implements OnInit {

    newsAdd: News = {title: null, description: null};
    uuid: string;

    constructor(private newsService: NewsService, private router: Router, private messageService: MessageService) { }

    ngOnInit() {   
    }

    save() {
        this.newsService.postNews(this.newsAdd).subscribe((data: any) => {
            
        });
    }

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'Success', severity: 'success', summary: 'Success', detail: 'News added' });
    }

}
