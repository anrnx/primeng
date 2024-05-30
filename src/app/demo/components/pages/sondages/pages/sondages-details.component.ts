import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    templateUrl: './sondages-details.component.html',
    styleUrls: ['./sondages-details.component.scss']
})
export class SondagesDetailsComponent implements OnInit {

    uuid: string;

    constructor(private confirmationService: ConfirmationService, private route: ActivatedRoute, public messageService: MessageService, private router: Router ) { }

    ngOnInit() {   
       
    }

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"none",
            rejectIcon:"none",
            rejectButtonStyleClass:"p-button-text",
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
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
}
