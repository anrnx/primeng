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
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { ShoppingListComponent } from './pages/shopping-list.component';
import { ShoppingAddComponent } from './pages/shopping-add.component';
import { AutoCompleteModule } from 'primeng/autocomplete';


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
        ShoppingRoutingModule,
        InputTextModule,
        EditorModule,
        CardModule,
        TabMenuModule,
        ConfirmDialogModule,
        CheckboxModule,
        MessagesModule,
        TabViewModule,
        RatingModule,
        SliderModule,
        AutoCompleteModule,
    ],
    
    providers: [
    ],

    declarations: [ShoppingListComponent, ShoppingAddComponent]
})
export class ShoppingModule { }
