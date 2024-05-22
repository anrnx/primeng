import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ImageModule } from 'primeng/image';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { SliderModule } from 'primeng/slider';
import { TabMenuModule } from 'primeng/tabmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { UiComponent } from './ui.component';
import { UiRoutingModule } from './ui-routing.module';
import { InputIconModule } from 'primeng/inputicon';


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
        CardModule,
        TabMenuModule,
        SplitButtonModule,
        ProgressSpinnerModule,
        SliderModule,
        PickerComponent,
        DropdownModule,
        CalendarModule,
        ImageModule,
        ReactiveFormsModule,
        EditorModule,
        ToastModule,
        ConfirmPopupModule,
        DialogModule,
        IconFieldModule,
        ImageModule,
        UiRoutingModule,
        InputIconModule,
        IconFieldModule
    ],
    
    providers: [
    ],

    declarations: [UiComponent]
})
export class UiModule { }
