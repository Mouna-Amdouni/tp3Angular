import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { TpComponent } from './tp/tp.component';
import { ProfilComponent } from './profil/profil.component';
import { Partie2Component } from './partie2/partie2.component';

@NgModule({
  declarations: [
    AppComponent,
    TpComponent,
    ProfilComponent,
    Partie2Component
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
