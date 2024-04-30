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

    directoryDetails: Directory;
    uuid: string;

    // directoryFormGroup = new FormGroup({
    //     isprimary: new FormControl(null),
    //     name: new FormControl(null, Validators.required),
    //     firstname: new FormControl(null),
    //     priority: new FormControl(null),
    //     label: new FormControl(null),
    //     emaillabel: new FormControl(null),
    //     description: new FormControl(null),
    //     tags: new FormControl([]),
    //     emails: new FormControl([]),
    //     phonenumberlabel: new FormControl([]),
    //     phonenumber : new FormControl([]),
    //     website: new FormControl(null),
    //     physicaladdress : new FormControl(null),
    //     city: new FormControl(null),
    //     postalcode: new FormControl(null),
    //     postaladdress: new FormControl(null),
    //     daysOfWeek: new FormControl(null),

    //     start: new FormControl(null),
    //     end: new FormControl(null),
    //     isAppointment: new FormControl(null),
    // });

    constructor(private directoryService: DirectoryService, private route: ActivatedRoute, public messageService: MessageService, private router: Router ) { }

    ngOnInit() {
        this.uuid = this.route.snapshot.params['uuid'];
        this.directoryService.getDirectoryDetails(this.uuid).subscribe((data: any) => {
            this.directoryDetails = data;
        })
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

    saveDetails() {
        this.directoryService.patchDirectoryDetails(this.uuid, this.directoryDetails).subscribe((data: any) => {
            this.directoryDetails = data;
            this.updateSuccess();
            this.router.navigate(['pages/news']);
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
