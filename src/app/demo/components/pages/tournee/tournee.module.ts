import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TourneeRoutingModule } from './tournee-routing.module';
import { DirectoryService } from '../../../service/directory.service';
import { TourneeListComponent } from './pages/tournee-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { TourneeAddComponent } from './pages/tournee-add.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabMenuModule } from 'primeng/tabmenu';

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
        TourneeRoutingModule,
        InputTextModule,
        EditorModule,
        CardModule,
        InputSwitchModule,
        AutoCompleteModule,
        CalendarModule,
        ReactiveFormsModule,
        MessageModule,
        ToastModule,    
        ConfirmDialogModule,
        TabMenuModule
    ],    
    providers: [
       DirectoryService,
       ConfirmationService
    ],

    declarations: [TourneeAddComponent, TourneeListComponent]
})
export class TourneeModule { }
