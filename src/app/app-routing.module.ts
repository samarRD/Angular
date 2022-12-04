import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { ModifierComponent } from './modifier/modifier.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { InterfaceprofilComponent } from './interfaceprofil/interfaceprofil.component';
import { SecureInnerpageGuard } from './Guard/secure-innerpage.guard';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [
  { path: 'Inscription', component:InscriptionFormComponent , canActivate:   [SecureInnerpageGuard]},
 { path: 'authentification', component:AuthentificationComponent, canActivate: [SecureInnerpageGuard]},
 { path: '',redirectTo:'/authentification',pathMatch:'full'},
 {path : 'dashboard' , component : DashboardAdminComponent ,canActivate:[AuthGuard]},


 {path : "admin" , component : InterfaceprofilComponent,canActivate:[AuthGuard]},
 {path : "modifier/:id" , component : ModifierComponent ,canActivate:[AuthGuard]},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
