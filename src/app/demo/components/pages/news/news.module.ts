import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from '../../../service/news.service';
import { NewsListComponent } from './pages/news-list.component';
import { NewsDetailsComponent } from './pages/news-details.component';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { NewsAddComponent } from './pages/news-add.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
        NewsRoutingModule,
        InputTextModule,
        EditorModule,
        ToastModule
    ],
    
    providers: [
       NewsService,
       MessageService
    ],

    declarations: [NewsAddComponent, NewsListComponent, NewsDetailsComponent]
})
export class NewsModule { }
