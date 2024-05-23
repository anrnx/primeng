import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { NgxFlowModule } from '@flowjs/ngx-flow';
import { FileUploadSingleComponent } from './file-upload-single/file-upload-single.component';
import { UploadComponent } from './pages/upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadService } from 'src/app/demo/service/upload.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        InputTextModule,
        EditorModule,
        CardModule,
        NgxFlowModule,
        UploadRoutingModule,
        ToastModule,
        ConfirmPopupModule
    ],
    providers: [
        MessageService,
        UploadService
    ],
    declarations: [
        UploadComponent,
        FileUploadSingleComponent
    ]
})
export class UploadModule { }
