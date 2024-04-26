import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../api/news';
import { Directory } from '../api/directory';


@Injectable()
export class DirectoryService {

    constructor(private http: HttpClient) { }

     getDirectoryList() {
        return this.http.get<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts');
    }

    dataSourceDirectoryList(page, limit, filters) {
        var filterString = '';
        console.log(filters);        
        if (filters && filters['name'] && filters['name'].value) {
            filterString += "&name_like=" + filters['name'].value;
        }
        if (filters && filters['firstname'] && filters['firstname'].value) {
            filterString += "&firstname_like=" + filters['firstname'].value;
        }
        if (filters && filters['isPrimary'] && filters['isPrimary'].value) {
            filterString += "&isPrimary_like=" + filters['isPrimary'].value;
        }
        return this.http.get<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts?page='+page+'&limit='+limit+filterString, {observe: 'response'});
    }

    getDirectoryDetails(uuid: string) {
        return this.http.get<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts' + uuid);
    }

    patchDirectoryDetails(uuid: string, directory: Directory) {
        return this.http.patch<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts' + uuid, directory);
    }

    postDirectory(directory: Directory) {
        return this.http.post<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts', directory);
    }

    deleteDirectory(uuid: String) {
        return this.http.delete<any>('https://api.cityapp.lu/directory/api/configurations/developer/contacts' + uuid);
    }


    getTags() {
        return this.http.get<any>('https://api.cityapp.lu/directory/api/configurations/developer/tags');
    }
}
