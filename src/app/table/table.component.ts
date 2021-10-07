import {Component, OnInit} from '@angular/core';
import {UserSearchInGitService} from "../services/user-search-in-git.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: any;
  searchValue = '';
  user: any = {};

  constructor(private userSearchInGitService: UserSearchInGitService) { }

  ngOnInit(): void {
    this.searchValue = this.userSearchInGitService.searchValue;
    this.users = this.userSearchInGitService.users;
  }

  getUsers(): void {
    if (this.searchValue.trim() === '') return;
    this.userSearchInGitService.getUsersInGit(this.searchValue.trim())
      .subscribe((usersResponse) => {
      if (usersResponse.items.length != 0) {
        this.users = usersResponse.items;
      }
    })
  }

  openDetailModal(user: any): void {
    this.user = user;
  }
}
