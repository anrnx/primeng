import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UnauthorisedComponent } from './unauthorised.component';
import { LoginComponent } from '../auth/login/login.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: UnauthorisedComponent },
    ])],
    exports: [RouterModule]
})
export class UnauthorisedRoutingModule { }
