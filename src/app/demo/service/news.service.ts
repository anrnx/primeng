import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../api/news';

@Injectable()
export class NewsService {

    constructor(private http: HttpClient) { }

     getNewsList() {
        return this.http.get<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news');
    }

    dataSourceNewsList(page, limit, filters) {
        var filterString = '';
        if (filters != null) {
            filterString += "&title_like=test";
            filterString += "&description_like=test";
        }
        
        return this.http.get<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news?page='+page+'&limit='+limit+filterString, {observe: 'response'});
    }


    getNewsDetails(uuid: string) {
        return this.http.get<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news/' + uuid);
    }

    patchNewsDetails(uuid: string, news: News) {
        return this.http.patch<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news/' + uuid, news);
    }

    postNews(news: News) {
        return this.http.post<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news', news);
    }

    deleteNews(uuid: string) {
        return this.http.delete<any>('https://api.cityapp.lu/news/api/configurations/dudelange-findit/news/' + uuid);
    }
}