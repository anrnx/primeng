import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    activeItem: MenuItem | undefined;

    items: MenuItem[] | undefined;

    messages = [
        { username: 'John', content: 'hello', color: '#FFBF78' },
        { username: 'doe', content: 'hello', color: '#FFEEA9' },
        { username: 'John', content: 'hello', color: '#FFBF78' },
        { username: 'doe', content: 'works', color: '#FFEEA9' },
        { username: 'John', content: 'test', color: '#FFBF78' },
        { username: 'doe', content: 'y', color: '#FFEEA9' },
      ];
        
    constructor() { }

    ngOnInit(){

        this.items = [
            { label: 'Messages programmés', routerLink: '/pages/messages'},
            { label: 'Messages envoyés', routerLink: '/pages/messages/sent'},
        ]

    }
}
