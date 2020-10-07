import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Interceptor } from './auth/interceptor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule,Interceptor, HttpClientModule ,FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
