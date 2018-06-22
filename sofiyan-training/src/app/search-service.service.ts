import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  users : any;

  private dataBehaviour = new BehaviorSubject('initial');
  currentSource = this.dataBehaviour.asObservable();

  private sortBehaviour = new BehaviorSubject('login');
  sortSource = this.sortBehaviour.asObservable();

  constructor(private http: Http) { }
  search(search): any{
    return this.http.get('https://api.github.com/search/users?q='+ search).subscribe(
      (data) => {
        this.users = data.json();
        this.dataBehaviour.next(this.users.items);
        console.log(this.users.items);
      },
      (error) => console.log(error)
    );
  }

  sortData(value): any{
    switch(value){
      case 'az':
        this.sortBehaviour.next('login');
        break;
      case 'za': 
        this.sortBehaviour.next('!login');
        break;
      case 'rankAsc':
        this.sortBehaviour.next('score');
        break;
      case 'rankDesc':
        this.sortBehaviour.next('!score');
        break;
      default:
        this.sortBehaviour.next('login');
        break;
    }
  }

  userList(){
    return this.users;
  }
}
