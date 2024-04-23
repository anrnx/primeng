import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectoryListComponent } from './pages/directory-list.component';
import { DirectoryDetailsComponent } from './pages/directory-details.component';
import { DirectoryAddComponent } from './pages/directory-add.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DirectoryListComponent },
        { path: 'add', component: DirectoryAddComponent },
        { path: ':uuid', component: DirectoryDetailsComponent },        
    ])],
    exports: [RouterModule]
})
export class DirectoryRoutingModule { }
