import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SondagesListComponent } from './pages/sondages-list.component';
import { SondagesAddComponent } from './pages/sondages-add.component';
import { SondagesDetailsComponent } from './pages/sondages-details.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SondagesListComponent },
        { path: 'add', component: SondagesAddComponent },
        { path: ':uuid', component: SondagesDetailsComponent },        
    ])],
    exports: [RouterModule]
})
export class SondagesRoutingModule { }
