import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { AuthGuard } from "./shared/auth/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutUsComponent,
    // ContactComponent,
    // LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    NgSelectModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
