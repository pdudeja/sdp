import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import   { DataTableComponent } from './dataTable/dataTable.component';
import { MultiFormComponent } from './mutlForm/multiForm.component';
import { FilterComponent } from './filter/filter.component';
const routes: Routes = [
  { path: '', component: DataTableComponent },

  { path: 'multi', component: MultiFormComponent },
  { path: 'filter', component: FilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];