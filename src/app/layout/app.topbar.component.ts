import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../demo/service/auth.service';
import { User } from '../demo/api/user';
import { JwtUtil } from '../utilities/JwtUtil';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    user!: User;
    username: String;

    constructor(public layoutService: LayoutService, private confirmationService: ConfirmationService, private authService: AuthService, private router: Router, private messageService: MessageService) { }

   


    confirm(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Please confirm to proceed moving forward.',            
            accept: () => {
                // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    // logout() {
    //     this.authService.logout(); // Implémente la logique de déconnexion dans ton AuthService
    //   }

    ngOnInit() {
        console.log(JwtUtil.getUserId());
        this.username = JwtUtil.getUserId();
        this.items = [
            {
                label: 'Déconnexion',
                icon: 'pi pi-power-off',
               
                items: []
            },
        ]
        }

    logout() {
        JwtUtil.removeToken();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Déconnexion réussie' });
        this.router.navigate(['/auth/login']);   
    }

    
}
