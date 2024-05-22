import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UiComponent }        
    ])],
    exports: [RouterModule]
})
export class UiRoutingModule { }
