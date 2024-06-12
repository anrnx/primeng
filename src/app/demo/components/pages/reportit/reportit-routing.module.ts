import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportItListComponent } from './pages/reportit-list.component';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ReportItListComponent },      
    ])],
    exports: [RouterModule]
})
export class ReportItRoutingModule { }
