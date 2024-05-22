import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

    constructor() {

    }

    logoUrl: any;
    uploadLogoQuery: any;
    ngOnInit(): void {
        console.log("TEST");
    }

}
