import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { NewsService } from '../../service/news.service';
import { ImageModule } from 'primeng/image';
import { StatistiquesService } from '../../service/statistiques.service';
import { CalendarModule } from 'primeng/calendar';


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
        DashboardsRoutingModule,
        ImageModule,
        CalendarModule,
    ],
    
    providers: [
       NewsService,
       StatistiquesService
    ],

    declarations: [DashboardComponent]
})
export class DashboardModule { }
