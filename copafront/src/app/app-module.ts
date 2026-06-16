import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CardNoticia } from './components/card-noticia/card-noticia';
import { Navbar } from './components/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { FormNoticia } from './components/form-noticia/form-noticia';

@NgModule({
  declarations: [App, Navbar, CardNoticia, FormNoticia],
  imports: [BrowserModule, AppRoutingModule, NgbCollapseModule, NgbDropdownModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
