import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Squad, SuperHero } from '../../api/superhero';
import { NewsService } from '../../service/news.service';
import { News } from '../../api/news';
import { Choice } from '../../api/choice';
import { StatistiquesService } from '../../service/statistiques.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

declare var IconPicker: any;


@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
[x: string]: any;

    value: number = 50;

    rangeDates: Date[] | undefined;

    choice: Choice[] | undefined;

    selectedChoice: Choice | undefined;

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    members: SuperHero[];
    squad: Squad;

    showEmoji: boolean = false;

    newsList: News[] = [];

    dateFrom = "2024-04-03";
    dateTo = "2024-05-03";

    showSpinner: boolean = false;
    
    constructor(private statistiquesService: StatistiquesService, private productService: ProductService, public layoutService: LayoutService, public newsService: NewsService) {
        
        
    }

    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    getStatsistics() {
        this.statistiquesService.getStats(this.dateFrom, this.dateTo, this.selectedChoice).subscribe(data => {
            console.log(data);
            this.initChart(data)
        });
    }

    toggleEmoji() {
        this.showEmoji = !this.showEmoji;
    }

    addEmoji(event: any) {
        console.log(event.emoji);
    }
    
    getStatChoice() {
       
        this.statistiquesService.getStatsList().subscribe(data => {
            this.choice = data.statistics;

            if (!this.selectedChoice) this.selectedChoice = this.choice[0];
            this.getStatsistics();             
        });
    }

    ngOnInit() {
        this.getStatChoice();
        this.items = [
            { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/']},
            { label: 'Directory', icon: 'pi pi-users', routerLink: ['/pages/directory']},
            { label: 'News', icon: 'pi pi-book', routerLink: ['/pages/news']},
        ];
    }

    couleurs: string[] = [
        "#FF0000", // Rouge
        "#00FF00", // Vert
        "#0000FF", // Bleu
        "#FFFF00", // Jaune
        "#FF00FF", // Magenta
        "#00FFFF"  // Cyan
      ];
    
      afficherCouleurAleatoire() {
        const indiceAleatoire = Math.floor(Math.random() * this.couleurs.length);
        const couleurAleatoire = this.couleurs[indiceAleatoire];
        return couleurAleatoire;
      }

    initChart(stats) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        var datasets = [];
        
        stats.series.forEach(serie => {
            datasets.push({
                label: serie.label,
                data: serie.data,
                fill: false,
                backgroundColor: this.afficherCouleurAleatoire(),
                borderColor: this.afficherCouleurAleatoire(),
                tension: .4
            },);
        });

       
        
        this.chartData = {
            labels: stats.labels,
            datasets: datasets,
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        this.showSpinner = false;
    }

    onDateChange() {
        if (this.rangeDates.length === 2) {
            this.showSpinner = true;
            this.dateFrom = this.format(this.rangeDates[0], 'yyyy-MM-dd');
            this.dateTo = this.format(this.rangeDates[1], 'yyyy-MM-dd');
            this.getStatsistics();
        } else {
            return;
        }
    }

    format = function date2str(x, y) {
        var z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
        });
    
        return y.replace(/(y+)/g, function(v) {
            return x.getFullYear().toString().slice(-v.length)
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
