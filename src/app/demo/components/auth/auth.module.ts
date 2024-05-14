import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StyleClassModule } from 'primeng/styleclass';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        ProgressBarModule
    ],
    providers: [
      AuthService
    ],
})
export class AuthModule { }
