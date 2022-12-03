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


const routes: Routes = [
  { path: 'Inscription', component:InscriptionFormComponent},
 { path: 'authentification', component:AuthentificationComponent},
 { path: '',redirectTo:'/authentification',pathMatch:'full'},
 {path : 'dashboard' , component : DashboardAdminComponent},
 {path : "ajouter" , component : AjouterComponent},
 {path : "supprimer" , component : SupprimerComponent},
 {path : "admin" , component : EspaceAdminComponent},
 {path : "profile" , component : InterfaceprofilComponent},
 {path : "modifier/:id" , component : ModifierComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
