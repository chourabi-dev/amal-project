import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CompaniesListComponent } from './views/companies-list/companies-list.component';
import { CompaniesEditComponent } from './views/companies-edit/companies-edit.component';
import { CompaniesAddComponent } from './views/companies-add/companies-add.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CompaniesListComponent,
    CompaniesEditComponent,
    CompaniesAddComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
