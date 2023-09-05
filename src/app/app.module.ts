import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from './services/global-error-handler/global-error-handler.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SnackbarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class AppModule {}
