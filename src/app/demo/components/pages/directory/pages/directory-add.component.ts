import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { MessageService } from 'primeng/api';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';

@Component({
    templateUrl: './directory-add.component.html',
    styleUrls: ['./directory-add.component.scss'],
})
export class DirectoryAddComponent implements OnInit {

    directoryAdd: News = {title: null, description: null};
    uuid: string;

    constructor(private directoryService: DirectoryService, private router: Router, public messageService: MessageService) { }

    ngOnInit() {   
    
    }
    
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contact added' });
    }

    showError(error) {
        
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    save() {        
        this.directoryService.postDirectory(this.directoryAdd).subscribe((data: any) => {
            this.showSuccess();
            this.router.navigate(['pages/directory']);            
        }, error => {
            this.showError(error);
        });
    }}
