import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NotFundComponent } from './not-fund/not-fund.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewEditComponent } from './new-edit/new-edit.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { RequestTraceComponent } from './request-trace/request-trace.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
    // children: []
  },
  // {
  //   path: '**',
  //   component: NotFundComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'newEdit',
    component: NewEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'popUps',
    component: PopUpsComponent,
    pathMatch: 'full'
  },
  {
    path: 'requestTrace',
    component: RequestTraceComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
