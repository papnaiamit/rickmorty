import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public species;
  public allFilters = {
    species: [
      'Human',
      'Mythology',
      'Other Species'
    ],
    gender: [
      'Male',
      'Female'
    ],
    origin: [
        'Unknown',
        'Post Apocalytic',
        'Nuptia 4',
        'Other origin'
    ]
  };
  constructor() { }
  ngOnInit(): void {
  }

  public filterCharacter(event) {
    console.log(event);
  }

}
