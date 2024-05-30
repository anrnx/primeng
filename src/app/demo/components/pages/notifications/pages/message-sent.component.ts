import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './message-sent.component.html',
    styleUrls: ['./message-sent.component.scss']
})
export class MessageSentComponent implements OnInit {

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    activeItem: MenuItem | undefined;

    items: MenuItem[] | undefined;
    
    
    constructor() { }

    ngOnInit(){

        this.items = [
            { label: 'Messages programmés', routerLink: '/pages/messages'}, 
            { label: 'Messages envoyés', routerLink: '/pages/messages/sent'}, 
        ]
        this.activeItem = this.items[0];
    }
    onActiveItemChange(event: MenuItem) {
        this.activeItem = event;
    }
}
