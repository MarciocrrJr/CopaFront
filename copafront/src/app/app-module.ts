import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar } from './components/navbar/navbar';
import { CardNoticia } from './components/card-noticia/card-noticia';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Navbar, CardNoticia, Footer],
  imports: [BrowserModule, AppRoutingModule, NgbAlertModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
