import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {NotfoundComponent} from './notfound.component';


const routes: Routes = [
  {
    path: '',
    component: NotfoundComponent
  }
];


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotfoundModule { }
