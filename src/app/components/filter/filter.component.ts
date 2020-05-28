import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filterArr: Array<string> = [];
  public allFilters = {
    species: [
      {value: 'Human', checked: false, type: 'species'},
      {value: 'Mythology', checked: false, type: 'species'},
      {value: 'Other Species', checked: false, type: 'species'}
    ],
    gender: [
      {value: 'Male', checked: false, type: 'gender'},
      {value: 'Female', checked: false, type: 'gender'}
    ],
    origin: [
      {value: 'Unknown', checked: false, type: 'gender'},
      {value: 'Post Apocalytic', checked: false, type: 'gender'},
      {value: 'Nuptia 4', checked: false, type: 'gender'},
      {value: 'Other origin', checked: false, type: 'gender'}
    ]
  };
  constructor(private service: CommonService) { }
  ngOnInit(): void {
    this.service.currentFilter.pipe().subscribe((value) => {
      this.filterArr = value;
    });
  }

  /**
   * @description this function is responsible of updating selected filter
   * @param event:any
   */
  public updateFilter(event, item) {
    if (event.target.checked) {
      item.checked = event.target.checked;
      this.filterArr.push(item);
    }
    else {
      const index = this.filterArr.indexOf(event.target.value);
      this.filterArr.splice(index, 1);
    }
    this.service.filterCategory(this.filterArr);
  }
}
