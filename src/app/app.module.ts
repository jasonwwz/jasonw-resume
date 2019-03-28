import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SummaryComponent } from './summary/summary.component';
import { TechComponent } from './tech/tech.component';
import { EmploymentComponent } from './employment/employment.component';
import { StateServiceComponent } from './service/state-service/state-service.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    SummaryComponent,
    TechComponent,
    EmploymentComponent,
    StateServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [ServiceComponent, StateServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
