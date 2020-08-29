import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {HomeComponent} from './home.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductRowComponent} from './product-list/product-row/product-row.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../loader/loader.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductRowComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap : [
    HomeComponent
  ]

})
export class HomeModule { }
