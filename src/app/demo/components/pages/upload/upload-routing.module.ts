import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './pages/upload.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UploadComponent },     
    ])],
    exports: [RouterModule]
})
export class UploadRoutingModule { }
