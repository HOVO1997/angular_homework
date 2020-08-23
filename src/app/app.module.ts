import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './root/app.component';
import {ViewModule} from './pages/view.module';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewModule
  ],
  providers: [
  DataService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
