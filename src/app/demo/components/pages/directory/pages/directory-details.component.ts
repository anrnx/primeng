import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';
import { Directory } from 'src/app/demo/api/directory';
import { DirectoryService } from 'src/app/demo/service/directory.service';

@Component({
    templateUrl: './directory-details.component.html',
    styleUrls: ['./directory-details.component.scss']
})
export class DirectoryDetailsComponent implements OnInit {

    objectKeys(obj) {
        return Object.keys(obj);
    }

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


    directoryDetails: Directory;
    uuid: string;
    directoryFormGroup: FormGroup;

    constructor(private directoryService: DirectoryService, private route: ActivatedRoute, public messageService: MessageService, private router: Router ) { }

    ngOnInit() {
        this.uuid = this.route.snapshot.params['uuid'];
        this.directoryService.getDirectoryDetails(this.uuid).subscribe((data: any) => {
            this.directoryDetails = data;
            if(this.directoryDetails.phonenumbers == null) this.directoryDetails.phonenumbers=[];    
            if(this.directoryDetails.emails == null) this.directoryDetails.emails=[];    
            if(this.directoryDetails.schedule == null) this.directoryDetails.schedule= this.daysOfWeek;    

            this.directoryFormGroup = new FormGroup({
                isPrimary: new FormControl(this.directoryDetails.isPrimary),
                name: new FormControl(this.directoryDetails.name, Validators.required),
                firstname: new FormControl(this.directoryDetails.firstname),
                displayPosition: new FormControl(this.directoryDetails.displayPosition),
                label: new FormControl(this.directoryDetails.label),            
                description: new FormControl(this.directoryDetails.description),           
                tags: new FormControl(this.directoryDetails.tags),           
                website: new FormControl(this.directoryDetails.website),
                physicaladdress : new FormControl(this.directoryDetails.physicalAddress),
                city: new FormControl(this.directoryDetails.city),
                postalcode: new FormControl(this.directoryDetails.postalcode),
                postaladdress: new FormControl(this.directoryDetails.postalAddress),
                latitude: new FormControl(this.directoryDetails.latitude),
                longitude: new FormControl(this.directoryDetails.longitude),
            });

            
        })

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
    }
    
    addEmail() {
        this.directoryDetails.emails.push({label: '', email: ''});
    }

    removeEmail(index) {
        this.directoryDetails.emails.splice(index, 1);
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
        this.directoryDetails.phonenumbers.push({label: '', phone: ''});
    }

    removePhoneNumber(index) {
        this.directoryDetails.phonenumbers.splice(index, 1);
    }

    showError(error) {

        this.messageService.add({ severity: 'warn', summary: 'Error', detail: error.message});
    }

    filterTags($event) {
        this.directoryService.getTags().subscribe((data: any) => {
            this.suggestionTags = data.filter(tag => tag.name.toLowerCase().includes($event.query.toLowerCase()));
        });
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

    save() {
        this.directoryDetails.name = this.directoryFormGroup.get('name').value;
        this.directoryDetails.firstname = this.directoryFormGroup.get('firstname').value;
        this.directoryDetails.priority = this.directoryFormGroup.get('displayPosition').value;
        this.directoryDetails.isPrimary = this.directoryFormGroup.get('isPrimary').value;
        this.directoryDetails.label = this.directoryFormGroup.get('label').value;
        this.directoryDetails.tags = this.directoryFormGroup.get('tags').value;
        this.directoryDetails.description = this.directoryFormGroup.get('description').value;

        this.directoryService.patchDirectoryDetails(this.uuid, this.directoryDetails).subscribe((data: any) => {
            this.directoryDetails = data;
            this.updateSuccess();
            this.router.navigate(['pages/directory']);
        }, error => {
            this.updateFail(error);
        });
    }

    deleteContact() {
        this.directoryService.deleteDirectory(this.uuid).subscribe((data: any) => {
            this.deleteSuccess();
            this.router.navigate(['pages/directory']);
        }, error => {
            this.deleteFail(error);
        });
    }
}
