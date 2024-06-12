import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarquesListComponent } from './pages/marques-list.component';
import { MarquesAddComponent } from './pages/marques-add.component';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MarquesListComponent },
        { path: 'add', component: MarquesAddComponent}     
    ])],
    exports: [RouterModule]
})
export class MarquesRoutingModule { }
