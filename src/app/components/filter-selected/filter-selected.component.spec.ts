import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectedComponent } from './filter-selected.component';

describe('FilterSelectedComponent', () => {
  let component: FilterSelectedComponent;
  let fixture: ComponentFixture<FilterSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
