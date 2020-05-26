import { Component, OnInit, Input } from '@angular/core';
import {Iresults } from '../../interfaces';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() characterDetails: Iresults;
  constructor() { }

  ngOnInit(): void {
  }

}
