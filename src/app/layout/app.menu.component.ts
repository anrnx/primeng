import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Notifications Push',
                        icon: 'pi pi-fw pi-bell',
                        items: [
                            {
                                label: 'Messages',
                                routerLink: ['/pages/messages']
                            },
                            {
                                label: 'Inscriptions',
                            },
                            {
                                label: 'Groupes de diffusion',
                            }
                        ]

                    },
            
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/auth/login']
                    },
                    {
                        label: 'News',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/pages/news']
                    },

                    {
                        label: 'Annuaire',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'List',
                                routerLink: ['/pages/directory']
                            },
                            {
                                label: 'Permanences',
                            },
                            {
                                label: 'Tags',
                            }
                        ]

                    },

                    {
                        label: 'Sondages',
                        icon: 'pi pi-fw pi-bell',
                        routerLink: ['/pages/sondages']
                    },

                    {
                        label: 'Upload',
                        icon: 'pi pi-fw pi-upload',
                        routerLink: ['/pages/upload']
                    },
                    {
                       label: 'Ui', icon: 'pi pi-fw pi-home', routerLink: ['/pages/ui']
                    },
                   
                ]
            },  
        ];
    }
}
