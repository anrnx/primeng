import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Squad, SuperHero } from '../../api/superhero';
import { NewsService } from '../../service/news.service';
import { News } from '../../api/news';
import { StatistiquesService } from '../../service/statistiques.service';


@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
[x: string]: any;

    rangeDates: Date[] | undefined;

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    members: SuperHero[];
    squad: Squad;

    newsList: News[] = [];

    dateFrom = "2024-04-03";
    dateTo = "2024-05-03";
    constructor(private statistiquesService: StatistiquesService, private productService: ProductService, public layoutService: LayoutService, public newsService: NewsService) {
        
        
    }

    getStatsistics() {
        this.statistiquesService.getStats(this.dateFrom, this.dateTo).subscribe(data => {
            console.log(data);
            this.initChart(data)
        });
    }


    ngOnInit() {
        this.getStatsistics();        
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
    }

    onDateChange() {
        if (this.rangeDates.length === 2) {
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
