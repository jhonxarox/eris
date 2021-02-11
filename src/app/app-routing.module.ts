import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IssueListComponent } from './issue-list/issue-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'details', component: IssueListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
