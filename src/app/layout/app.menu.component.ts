import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { lastValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';

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
                label: 'Accueil',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
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
                        label: 'Report-it',
                        icon: 'pi pi-exclamation-triangle',
                        routerLink: ['/pages/reportit']
                    },

                    {
                        label: 'Synchronisation',
                        icon: 'pi pi-cloud-download',
                    },

                    {
                        label: 'Sondages',
                        icon: 'pi pi-chart-bar',
                        routerLink: ['/pages/sondages']
                    },

                    {
                        label: 'News',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/pages/news']
                    },

                    {
                        label: 'Find it ',
                        icon: 'pi pi-fw pi-shopping-bag',
                        items: [ 
                            {label: 'Commerces'},
                            {label: 'Marques'},
                        ]
                    },

                    {
                        label: 'Shopping',
                        icon: 'pi pi-fw pi-shopping-bag',
                        items: [ 
                            {label: 'Commerces', routerLink: ['/pages/shopping']},
                            {label: 'Marques', routerLink: ['/pages/marques']},
                        ]
                    },

                    {
                        label: 'Tags',
                        icon: 'pi pi-fw pi-book',
                    },

                    {
                        label: 'Déchets',
                        icon: 'pi pi-fw pi-trash',
                        items: [ 
                            {label: 'Tournées', routerLink: ['/pages/tournee']},
                            {label: "Date d'enlèvement"},
                            {label:'Types de déchets'},
                            {label:'Centre de recyclage'},
                            {label:'Tout sur le tri'}
                        ]
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
                        label: 'Politique',
                        icon: 'pi pi-fw pi-inbox',
                        items: [ 
                            {label: 'Politiciens'},
                            {label: 'Catégories'},
                        ]
                    },

        ]},

        {
            label: 'Configuration',
            items: [
                {
                    label: 'Paramètres',
                    icon: 'pi pi-fw pi-cog',
                },

                {
                    label: 'Configuration application',
                    icon: 'pi pi-fw pi-file',
                    routerLink: ['/pages/configuration']
                },
                

                {
                    label: 'Utilisateurs',
                    icon: 'pi pi-fw pi-users',
                },
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/auth/login']
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
