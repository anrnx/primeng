import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    templateUrl: './tournee-add.component.html',
    styleUrls: ['./tournee-add.component.scss'],
})
export class TourneeAddComponent implements OnInit {


    suggestionTags: any[] = [];

    ngOnInit() {
        this.suggestionTags = [
            'Commune entière',
            'Localités',
            'Rues',
        ]
    }
}

