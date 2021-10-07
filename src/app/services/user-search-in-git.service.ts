import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserSearchInGitService {

  public url = environment.apiUrl + 'search/users?';
  public users: any = [];
  public searchValue = '';

  constructor(private http: HttpClient) { }

  getUsersInGit(q: string): Observable<any> {
    this.searchValue = q;
    const response =  this.http.get(this.url + 'q=' + q + '&per_page=20');
    response.subscribe((usersResponse: any) => {
      if (usersResponse.items.length != 0) {
        this.users = usersResponse.items;
      }
    })
    return response;
  }
}
