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
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { PerformanceUsersComponent } from './admin/performance-users/performance-users.component';
import { InterfaceEmployeeComponent } from './Employee/interface-employee/interface-employee.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { ListUsersRhComponent } from './Rh/list-users-rh/list-users-rh.component';
import { ListCongeComponent } from './Rh/list-conge/list-conge.component';
import { ChallengesComponent } from './challenge/challenges/challenges.component';
import { AddChallengeComponent } from './challenge/add-challenge/add-challenge.component';
import { UpdateChallengeComponent } from './challenge/update-challenge/update-challenge.component';
import { EmployeedashboardComponent } from './Employee/employeedashboard/employeedashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionFormComponent,
    AuthentificationComponent,
    DashboardAdminComponent,
    ModifierComponent,
    InterfaceprofilComponent,
    HomeComponent,
    DashboardRhComponent,
    ListUsersComponent,
    PerformanceUsersComponent,
    InterfaceEmployeeComponent,
    SideBarComponent,
    ListUsersRhComponent,
    ListCongeComponent,
    ChallengesComponent,
    AddChallengeComponent,
    UpdateChallengeComponent,
    EmployeedashboardComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
