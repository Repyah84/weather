import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SvgModule, WeatherIconModule } from '@modules';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SnackbarComponent],
  imports: [
    CommonModule,
    NgFor,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WeatherIconModule,
    SvgModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
