import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CompaniesListComponent } from './views/companies-list/companies-list.component';
import { CompaniesEditComponent } from './views/companies-edit/companies-edit.component';
import { CompaniesAddComponent } from './views/companies-add/companies-add.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [

    { path:'', component:CompaniesListComponent },
    { path:'companies/edit/:id', component:CompaniesEditComponent },
    { path:'companies/add', component:CompaniesAddComponent },
    


  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
