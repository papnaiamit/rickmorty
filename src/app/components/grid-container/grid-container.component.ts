import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IRickMortyResponse, Iresults } from '../../interfaces';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit, OnDestroy {
  public charactersList: Iresults[];
  constructor(private service: CommonService) { }
  public ngOnInit(): void {
    this.getAllDetails();
    const filterItems = (arr, query) => {
      if (query) {
        return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      }
    };
    this.service.currentSearch.pipe().subscribe((searchVal) => {
    this.charactersList = searchVal ? filterItems(this.charactersList, searchVal) : this.getAllDetails();
    });

    this.service.currentSorting.pipe().subscribe((sortVal) => {
      if (this.charactersList) {
        this.sortByAlphabetically(sortVal, 'name');
      }
    });
  }

  private getAllDetails() {
    this.service.getAllData().pipe(take(1)).subscribe((val: IRickMortyResponse) => {
      this.charactersList = val.results;
    });
  }

  /**
   * Sorting method
   *
   */
  public sortByAlphabetically(sortBy: string, field: string) {
    this.charactersList.sort((a: any, b: any) => {
      if (sortBy === 'descending') {
        if (a[field] > b[field]) {
          return -1;
        } else if (a[field] < b[field]) {
          return 1;
        } else {
          return 0;
        }
      } else if (sortBy === 'ascending') {
        if (a[field] < b[field]) {
          return -1;
        } else if (a[field] > b[field]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

  public ngOnDestroy(): void {
  }

}
