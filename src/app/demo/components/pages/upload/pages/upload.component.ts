import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/demo/api/news';
import { NewsService } from 'src/app/demo/service/news.service';

@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    logoUrl: any;
    uploadLogoQuery: any;
    ngOnInit(): void {
    }

}
