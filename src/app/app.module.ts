import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InscriptionFormComponent,
    AuthentificationComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
