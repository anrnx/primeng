import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../api/user";
import { Role } from "../api/roles";
import { JwtUtil } from "src/app/utilities/JwtUtil";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    login(email:string, password:string ) {
        return this.http.post<User>('https://api.cityapp.lu/auth/api/configurations/cityapp/tokens',
        { username: email, password: password });
    }

    // logout(token: string) {
    //    removeToken();
    // }

    getUserRole(): Role {
        /**
        * fake an API call
        */
        return Role.USER;
    }
}
