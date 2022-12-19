import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModifierComponent } from './modifier/modifier.component';
import { InterfaceprofilComponent } from './interfaceprofil/interfaceprofil.component';
import { HomeComponent } from './home/home.component';
import { DashboardRhComponent } from './dashboard-rh/dashboard-rh.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionFormComponent,
    AuthentificationComponent,
    DashboardAdminComponent,
    ModifierComponent,
    InterfaceprofilComponent,
    HomeComponent,
    DashboardRhComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
