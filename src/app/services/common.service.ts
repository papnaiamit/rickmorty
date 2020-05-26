import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private url = 'https://rickandmortyapi.com/api/character/';
  private searchSource = new BehaviorSubject('');
  public currentSearch = this.searchSource.asObservable();

  private sortingSource = new BehaviorSubject('');
  public currentSorting = this.sortingSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }
  public getAllData(): Observable<any> {
    return this.http.get(this.url);
  }

  public searchFilter(value: string) {
    this.searchSource.next(value);
  }

  public sortFilter(value: string) {
    this.sortingSource.next(value);
  }


}
