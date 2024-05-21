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
import { FileUpload } from 'primeng/fileupload';
import { FileUploadSingleComponent } from 'src/app/demo/components/pages/upload/file-upload-single/file-upload-single.component';
import { NgxFlowModule } from '@flowjs/ngx-flow';

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
        FileUploadSingleComponent
    ],
    providers: [
       MessageService
    ],
    declarations: [FileUploadSingleComponent]
})
export class UploadModule { }
