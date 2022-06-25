import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NovaTransferenciaComponent } from 'src/app/nova-transferencia/nova.transferencia.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
