import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Inscription', component:InscriptionFormComponent},
 { path: 'authentification', component:AuthentificationComponent},
 { path: '',redirectTo:'/authentification',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
