import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
      AuthService
    ],
})
export class AuthModule { }
