import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, FilterMatchMode, MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    templateUrl: './tournee-add.component.html',
    styleUrls: ['./tournee-add.component.scss'],
})
export class TourneeAddComponent implements OnInit {


    options = [
        { label: 'Commune entière' },
        { label: 'Localité' },
        { label: 'Rue' }
      ];

      show: any;


    
      selectedOption: any;
      selectedPrintOption: any;

      

    printOption = [
        { label: 'Toutes les rues' },
        { label: 'Rues activées' },
        { label: 'Rues désactivées' }        
    ];

    currentPage: number = 1;
    rowsPerPage: number = 3;
    totalRecords: number = 10;
    loading= false;
    matchModeOptions: { label: string; value: FilterMatchMode; }[];
    activeItem: MenuItem | undefined
    onPageChange(event: any) {
    }

    ngOnInit() {
       
    }

    showPopUp() {
       
    }

}

