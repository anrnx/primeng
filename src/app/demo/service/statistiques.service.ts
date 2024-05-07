import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class StatistiquesService {
    constructor(private http: HttpClient) { }
    
    getStatsList() {
        return this.http.get<any>("https://api.cityapp.lu/statistic/api/configurations/steinsel");
    }

     getStats(dateFrom, dateTo, selectedChoice) {
        return this.http.get<any>("https://api.cityapp.lu/statistic/api/configurations/steinsel/statistics/"+selectedChoice.identifier+"?groupBy=daily&dateFrom="+dateFrom+"&dateTo="+dateTo);
    }
}