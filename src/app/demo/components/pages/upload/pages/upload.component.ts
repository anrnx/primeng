import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    constructor() {

    }

    logoUrl: any;
    uploadLogoQuery: any = {
        "api": "news",
        "configuration": "developer",
        "folder": "logo"
      };
    ngOnInit(): void {
        console.log("TEST");
    }

}
