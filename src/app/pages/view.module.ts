import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductRowComponent } from './home/product-list/product-row/product-row.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LoaderComponent } from '../loader/loader.component';
import { HotkeysBlockerDirective } from '../hotkeys-blocker.directive';

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
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductRowComponent,
    LoginComponent,
    NotfoundComponent,
    RegisterComponent,
    ContactusComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    HotkeysBlockerDirective
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class ViewModule {}
