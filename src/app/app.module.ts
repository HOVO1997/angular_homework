import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './pages/home/product-list/product-list.component';
import { ProductRowComponent } from './pages/home/product-list/product-row/product-row.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { HotkeysBlockerDirective } from './hotkeys-blocker.directive';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const appRouts: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'contact', component : ContactusComponent },
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : '**', component : NotfoundComponent },

  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductRowComponent,
    LoaderComponent,
    HotkeysBlockerDirective,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [
  DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
