import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
                isprimary: new FormControl(this.directoryDetails.isprimary ?? false),
                name: new FormControl(this.directoryDetails.name, Validators.required),
                lastname: new FormControl(this.directoryDetails.lastname),
                displayPosition: new FormControl(this.directoryDetails.displayPosition),
                label: new FormControl(this.directoryDetails.label),            
                description: new FormControl(this.directoryDetails.description),           
                tags: new FormControl(this.directoryDetails.tags),           
                website: new FormControl(this.directoryDetails.website),
                physicaladdress : new FormControl(this.directoryDetails.physicalAddress),
                city: new FormControl(this.directoryDetails.city),
                postalcode: new FormControl(this.directoryDetails.postalcode),
                postaladdress: new FormControl(this.directoryDetails.postalAddress),
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
        this.directoryDetails.lastname = this.directoryFormGroup.get('lastname').value;
        this.directoryDetails.priority = this.directoryFormGroup.get('displayPosition').value;
        this.directoryDetails.isprimary = this.directoryFormGroup.get('isprimary').value;
        this.directoryDetails.label = this.directoryFormGroup.get('label').value;
        this.directoryDetails.description = this.directoryFormGroup.get('description').value;


        this.directoryService.patchDirectoryDetails(this.uuid, this.directoryDetails).subscribe((data: any) => {
            this.directoryDetails = data;
            this.updateSuccess();
            this.router.navigate(['pages/directory']);
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
