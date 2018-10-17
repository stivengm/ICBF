import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './header/footer/footer.component';
import { NotFundComponent } from './not-fund/not-fund.component';
import { NewEditComponent } from './new-edit/new-edit.component';
import { HeaderNavbarComponent } from './header/header-navbar/header-navbar.component';
import { PopUpsComponent } from './pop-ups/pop-ups.component';
import { RequestTraceComponent } from './request-trace/request-trace.component';
import { RegisterRequestComponent } from './register-request/register-request.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NotFundComponent,
    NewEditComponent,
    HeaderNavbarComponent,
    PopUpsComponent,
    RequestTraceComponent,
    RegisterRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
