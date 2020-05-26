import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FilterSelectedComponent } from './components/filter-selected/filter-selected.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import {ListFilterPipe} from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterItemComponent,
    FilterSelectedComponent,
    SearchBarComponent,
    GridContainerComponent,
    GridComponent,
    LandingComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  exports: [
    ListFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
