import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { SearchServiceService } from '../search-service.service';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { SortPipePipe } from '../sort-pipe.pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any;
  userRepo: any;
  username: any;
  query: any;
  p: number = 1;
  count: any;

  constructor(private searchService: SearchServiceService, private http: Http) {
    this.searchService.currentSource.subscribe(message => this.userList = message);
    this.searchService.sortSource.subscribe(sortData => this.query = sortData);

    this.count = this.userList.length;
  }  
  
  ngOnInit() {
    this.userList = this.searchService.users;
  }

  userDetails(login): any{
    this.username = login;
    $('#' + this.username).show();
    $('#' + this.username + '_collapse').removeClass('d-none');
    $('#' + this.username + '_details').addClass('d-none');
    return this.http.get('https://api.github.com/users/' + login + '/repos').subscribe(
      (data) => {
        this.userRepo = data.json();
        console.log(this.userRepo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  hideDetails(username): any{
    $('#' + this.username).hide();
    $('#' + username + '_collapse').addClass('d-none');
    $('#' + username + '_details').removeClass('d-none');
  }
}
