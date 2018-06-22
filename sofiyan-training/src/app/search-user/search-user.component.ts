import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  users: any;

  constructor(private searchService : SearchServiceService) { }

  searchUser(data): any{
    this.searchService.search(data);
  }

  sort(value): any{
    this.searchService.sortData(value);
  }

  ngOnInit() {
    $('#sorter').val($("#sorter option:first").val());
  }

}
