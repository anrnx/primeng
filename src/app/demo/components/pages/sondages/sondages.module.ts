import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SondagesRoutingModule } from './sondages-routing.module';
import { NewsService } from '../../../service/news.service';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SondagesAddComponent } from './pages/sondages-add.component';
import { SondagesListComponent } from './pages/sondages-list.component';
import { SondagesDetailsComponent } from './pages/sondages-details.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';

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
        SondagesRoutingModule,
        InputTextModule,
        EditorModule,
        CardModule,
        TabMenuModule,
        ConfirmDialogModule,
        CheckboxModule,
        MessagesModule,
        TabViewModule,
        RatingModule,
        SliderModule
    ],
    
    providers: [
       NewsService,
       ConfirmationService
    ],

    declarations: [SondagesAddComponent, SondagesListComponent, SondagesDetailsComponent]
})
export class SondagesModule { }