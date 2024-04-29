import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryService } from '../../../service/directory.service';
import { DirectoryListComponent } from './pages/directory-list.component';
import { DirectoryDetailsComponent } from './pages/directory-details.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { DirectoryAddComponent } from './pages/directory-add.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';

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
        DirectoryRoutingModule,
        InputTextModule,
        EditorModule,
        CardModule,
        InputSwitchModule,
        AutoCompleteModule,
        CalendarModule,
        ReactiveFormsModule,
        MessageModule
    ],
    
    providers: [
       DirectoryService,
    ],

    declarations: [DirectoryAddComponent, DirectoryListComponent, DirectoryDetailsComponent]
})
export class DirectoryModule { }
