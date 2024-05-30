import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './sondages-add.component.html',
    styleUrls: ['./sondages-add.component.scss'],
})
export class SondagesAddComponent implements OnInit {

    uuid: string;
    value!: number;

    noteMin: number = 0;
    noteMax: number = 10;

    constructor(private router: Router, public messageService: MessageService) { }

    ngOnInit() {   
    
    }
    
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'News added' });
    }

    showError(error) {
        
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    save() {
        
    }
}