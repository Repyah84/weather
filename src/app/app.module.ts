import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgModule, WeatherIconModule } from '@modules';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    NgFor,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherIconModule,
    SvgModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
