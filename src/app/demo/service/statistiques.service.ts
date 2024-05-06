import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StatistiquesService {
    constructor(private http: HttpClient) { }

     getStats(dateFrom, dateTo) {
        return this.http.get<any>("https://api.cityapp.lu/statistic/api/configurations/steinsel/statistics/opened_per_app?groupBy=daily&dateFrom="+dateFrom+"&dateTo="+dateTo);
    }
}