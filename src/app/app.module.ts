import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DataTableComponent } from './dataTable/dataTable.component';
import { MultiFormComponent } from './mutlForm/multiForm.component';

import { Ng2TableModule } from 'ng2-table/ng2-table';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';

import { FilterComponent } from './filter/filter.component';
import { SortPipe } from './filter/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    MultiFormComponent,
    FilterComponent,
    SortPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    Ng2TableModule,
    
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
