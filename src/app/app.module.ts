import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { PrimerNuevoComponenteComponent } from './nuevo-componente/primer-nuevo-componente/primer-nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    SegundoComponenteComponent,
    PrimerNuevoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
