import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourneeListComponent } from './pages/tournee-list.component';
import { TourneeAddComponent } from './pages/tournee-add.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: TourneeListComponent },
        { path: 'add', component: TourneeAddComponent },   
    ])],
    exports: [RouterModule]
})
export class TourneeRoutingModule { }
