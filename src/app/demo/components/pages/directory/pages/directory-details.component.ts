import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';

@Component({
    templateUrl: './directory-details.component.html',
    styleUrls: ['./directory-details.component.scss']
})
export class DirectoryDetailsComponent implements OnInit {

    directoryDetails: Directory; 
    uuid: string;

    constructor(private directoryService: DirectoryService, private route: ActivatedRoute, public messageService: MessageService, private router: Router ) { }

    ngOnInit() {   
        this.uuid = this.route.snapshot.params['uuid'];
        this.directoryService.getDirectoryDetails(this.uuid).subscribe((data: any) => {
            this.directoryDetails = data;
        })
    }

    updateSuccess() {
        
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'News changed' });
    }

    updateFail(error) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    deleteSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contact deleted' });
    }

    deleteFail(error) {
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    saveNewsDetails() {
        this.directoryService.patchDirectoryDetails(this.uuid, this.directoryDetails).subscribe((data: any) => {
            this.directoryDetails = data; 
            this.updateSuccess();
            this.router.navigate(['pages/news']);    
        }, error => {
            this.updateFail(error);
        });
    }

    deleteNews() {
        this.directoryService.deleteDirectory(this.uuid).subscribe((data: any) => {
            this.deleteSuccess();
            this.router.navigate(['pages/news']);    
        }, error => {
            this.deleteFail(error);
        });
    }
}
