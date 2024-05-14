import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    templateUrl: './directory-add.component.html',
    styleUrls: ['./directory-add.component.scss'],
})
export class DirectoryAddComponent implements OnInit {
    objectKeys(obj) {
        return Object.keys(obj);
    }

    directoryAdd: Directory = {tags: [], emails: [], phonenumbers: []};
    
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

    constructor(private fb:FormBuilder, private directoryService: DirectoryService, private router: Router, public messageService: MessageService, private confirmationService: ConfirmationService) {

    }

    getErrorList(errorObject) {
        return Object.keys(errorObject);
      }

    directoryFormGroup = new FormGroup({
            isPrimary: new FormControl(false),
            name: new FormControl(null, Validators.required),
            firstname: new FormControl(null),
            displayPosition: new FormControl(null),
            label: new FormControl(null),            
            description: new FormControl(null),           
            website: new FormControl(null),
            tags: new FormControl(null),
            physicaladdress : new FormControl(null),
            city: new FormControl(null),
            postalcode: new FormControl(null),
            postaladdress: new FormControl(null),
            latitude: new FormControl(null),
            longitude: new FormControl(null),
    });

    

    // this.directoryAdd.tags
    // this.directoryAdd.phonenumbers
    // this.directoryAdd.emails
    // this.directoryAdd.schedule 
    
    // street?: string;
    // latitude?: number;
    // longitude?: number; 
    
    // this.directoryAdd.pictureUrl
    // this.directoryAdd.i18n
    // this.directoryAdd.avatarUrl

    ngOnInit() {
        if(this.directoryAdd.phonenumbers == null) this.directoryAdd.phonenumbers=[];    
        if(this.directoryAdd.emails == null) this.directoryAdd.emails=[];    
        if(this.directoryAdd.schedule == null) this.directoryAdd.schedule= this.daysOfWeek;    
    }

    addEmail() {
        this.directoryAdd.emails.push({label: '', email: ''});
    }

    removeEmail(index) {
        this.directoryAdd.emails.splice(index, 1);
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
        this.directoryAdd.phonenumbers.push({label: '', phone: ''});
    }

    removePhoneNumber(index) {
        this.directoryAdd.phonenumbers.splice(index, 1);
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

        // Voici comment recupérer les valeurs d'un formGroup
        this.directoryAdd.name = this.directoryFormGroup.get('name').value;
        this.directoryAdd.firstname = this.directoryFormGroup.get('firstname').value;
        this.directoryAdd.priority = this.directoryFormGroup.get('displayPosition').value;
        this.directoryAdd.isPrimary = this.directoryFormGroup.get('isPrimary').value;
        this.directoryAdd.label = this.directoryFormGroup.get('label').value;
        this.directoryAdd.tags = this.directoryFormGroup.get('tags').value;
        this.directoryAdd.description = this.directoryFormGroup.get('description').value;
        this.directoryAdd.website = this.directoryFormGroup.get('website').value;
        this.directoryAdd.physicalAddress = this.directoryFormGroup.get('physicaladdress').value;
        this.directoryAdd.city = this.directoryFormGroup.get('city').value;
        this.directoryAdd.postalcode = this.directoryFormGroup.get('postalcode').value;
        this.directoryAdd.postalAddress = this.directoryFormGroup.get('postaladdress').value;
        this.directoryAdd.latitude = this.directoryFormGroup.get('latitude').value;
        this.directoryAdd.longitude = this.directoryFormGroup.get('longitude').value;

        this.directoryService.postDirectory(this.directoryAdd).subscribe((data: any) => {
            this.showSuccess();
            this.router.navigate(['pages/directory']);
        }, error => {
            this.showError(error);
        });
    }}

