import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';

import { Subscription } from 'rxjs';
import { UploadService } from 'src/app/demo/service/upload.service';

@Component({
  selector: 'file-upload-single',
  styleUrls: ['./file-upload-single.component.scss'],
  templateUrl: './file-upload-single.component.html',
})
export class FileUploadSingleComponent implements OnInit  {
  @Input() file: any;
  @Input() uploadQuery: any;
  @Input() small: boolean = false;
  @Input() flowAttributes: any = {accept: 'image/*'};


  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  @ViewChild('flowDirective')
  flowDirective: FlowDirective;
  autoUploadSubscription: Subscription;

  token: any;
  uploadUrl: any;


  constructor(private cd: ChangeDetectorRef, private uploadService: UploadService) {
  }

  ngOnInit(): void {
    // this.authService.getToken().subscribe(token => {this.token = token;});
    this.uploadUrl = this.uploadService.getEndpoint();
  }

  ngAfterViewInit() {
    this.cd.detectChanges();

    this.autoUploadSubscription = this.flowDirective.events$.subscribe(event => {
      switch (event.type) {
        case 'filesSubmitted':
          return this.processUploadPictures(this.flowDirective);
        case 'newFlowJsInstance':
          this.cd.detectChanges();
      }
    });
  }

  processUploadPictures(flow: FlowDirective) {
    var _this = this;

    var successUploadMsg = "Upload réussi, n'oubliez pas de sauvegarder votre commerce.";
    var errorUploadMsg = "Une erreur s'est produite lors de l'upload. Veuillez réessayer";

    flow.flowJs.opts.query = Object.assign(flow.flowJs.opts.query, this.uploadQuery);

    flow.flowJs.on('fileSuccess', function(file,message){
      if (message) {
        var result = JSON.parse(message);
        _this.file = result.url;
        _this.updateValue.emit(_this.file);
      }
      flow.cancel();
      // _this.toastrService.success(successUploadMsg, "TRANSFERT");
      _this.cd.detectChanges();
    });
    flow.flowJs.on('fileError', function(file, message){
      // _this.toastrService.danger(errorUploadMsg, "TRANSFERT");
      flow.cancel();
    });
    flow.upload();
  }

  ngOnDestroy() {
    this.autoUploadSubscription.unsubscribe();
  }

  trackTransfer(transfer: Transfer) {
    return transfer.id;
  }

  delete() {
    this.file = null;
    this.updateValue.emit(this.file);
  }

  generateUniqueIdentifierCustom(flowFile) {
    const relativePath = flowFile.relativePath || flowFile.webkitRelativePath || flowFile.fileName || flowFile.name;
    return flowFile.size + '-' + relativePath.replace(/[^0-9a-zA-Z_-]/img, '') + '-' + Date.now();
  };
}
