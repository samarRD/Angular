import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ModifierComponent } from './modifier/modifier.component';
import { InterfaceprofilComponent } from './interfaceprofil/interfaceprofil.component';
import { SecureInnerpageGuard } from './Guard/secure-innerpage.guard';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'Inscription', component:InscriptionFormComponent , canActivate:   [SecureInnerpageGuard]},
 { path: 'authentification', component:AuthentificationComponent, canActivate: [SecureInnerpageGuard]},
 { path: '',redirectTo:'/authentification',pathMatch:'full'},
 {path : 'admin' , component : DashboardAdminComponent ,canActivate:[AuthGuard],data: {
  role: ['Admin']
}},
 {path : 'home' , component : HomeComponent},


 {path : "rh" , component : InterfaceprofilComponent,canActivate:[AuthGuard],data: {
  role: ['Responsable RH','Admin']
}},
 {path : "modifier/:id" , component : ModifierComponent ,canActivate:[AuthGuard],data: {
  role: ['Responsable RH','Admin']
}},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
