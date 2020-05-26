import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor(private service: CommonService) { }
  public ngOnInit(): void {
  }

  public searchCharacter(value) {
    this.service.searchFilter(value);
  }

  public getSortValue(sortValue) {
    this.service.sortFilter(sortValue);
  }
}
