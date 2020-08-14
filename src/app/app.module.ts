import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-list/product-row/product-row.component';
import {FormsModule} from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { HotkeysBlockerDirective } from './hotkeys-blocker.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductRowComponent,
    LoaderComponent,
    HotkeysBlockerDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
