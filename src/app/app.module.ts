import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherIconModule } from '@modules';
import { NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    NgFor,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherIconModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
