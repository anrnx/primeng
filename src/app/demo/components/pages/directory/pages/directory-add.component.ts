import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/demo/api/news';
import { MessageService } from 'primeng/api';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
    templateUrl: './directory-add.component.html',
    styleUrls: ['./directory-add.component.scss'],
})
export class DirectoryAddComponent implements OnInit {
    objectKeys(obj) {
        return Object.keys(obj);
    }

    

    directoryAdd: Directory = {tags: []};
    uuid: string;

    emails: any[] = [];
    phoneNumbers: any[] = [];

    daysOfWeek: any = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: []
    }

    suggestionTags: any[] = [];

    constructor(private fb:FormBuilder, private directoryService: DirectoryService, private router: Router, public messageService: MessageService) { 
        
    }

    getErrorList(errorObject) {
        return Object.keys(errorObject);
      }

    directoryFormGroup = new FormGroup({
        isprimary: new FormControl(null, Validators.required),
        name: new FormControl(null, Validators.required),
        firstname: new FormControl(null, Validators.required),
        priority: new FormControl(null, Validators.required),
        label: new FormControl(null, Validators.required),
        emaillabel: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        tags: new FormControl(null, Validators.required),
        emails: new FormControl(null, Validators.required),
        phonenumberlabel: new FormControl(null, Validators.required),
        phonenumber : new FormControl(null, Validators.required),
        website: new FormControl(null, Validators.required),
        physicaladdress : new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        postalcode: new FormControl(null, Validators.required),
        postaladdress: new FormControl(null, Validators.required),
        daysOfWeek: new FormControl(null, Validators.required),

        start: new FormControl(null, Validators.required),
        end: new FormControl(null, Validators.required),
        isAppointment: new FormControl(null, Validators.required),
    });

    ngOnInit() {   
    
    }

    addEmail() {
        this.emails.push({label: '', email: ''});
    }

    removeEmail(index) {
        this.emails.splice(index, 1);
    }

    addDay(day) {
        this.daysOfWeek[day].push({start: '', end: '', isAppointment: false});
    }

    removeDay(day, index) {
        this.daysOfWeek[day].splice(index, 1);
    }
    
    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contact added' });
    }

    addPhoneNumber() {
        this.phoneNumbers.push({label: '', phone: ''});
    }

    removePhoneNumber(index) {
        this.phoneNumbers.splice(index, 1);
    }

    showError(error) {
        
        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    filterTags($event) {
        this.directoryService.getTags().subscribe((data: any) => {
            this.suggestionTags = data.filter(tag => tag.name.toLowerCase().includes($event.query.toLowerCase()));
        });
    }

    save() {        
        console.log(this.directoryAdd); 
        this.directoryService.postDirectory(this.directoryAdd).subscribe((data: any) => {
            this.showSuccess();
            this.router.navigate(['pages/directory']);            
        }, error => {
            this.showError(error);
        });
    }}

