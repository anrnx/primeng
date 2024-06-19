import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { Menu, MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MessageRoutingModule } from './message-routing.module';
import { DirectoryService } from '../../../service/directory.service';
import { MessageListComponent } from './pages/message-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { MessageAddComponent } from './pages/message-add.component';
import { DialogModule } from 'primeng/dialog';
import { TreeTableModule } from 'primeng/treetable';
import { TabViewModule } from 'primeng/tabview';


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
        InputSwitchModule,
        AutoCompleteModule,
        CalendarModule,
        ReactiveFormsModule,
        ToastModule,    
        ConfirmDialogModule,
        TabMenuModule,        
        MessageRoutingModule,
        DialogModule,
        TreeTableModule,
        TabViewModule
    ],    
    providers: [
       DirectoryService,
       ConfirmationService
    ],

    declarations: [MessageAddComponent, MessageListComponent]
})
export class NotificationsModule { }
