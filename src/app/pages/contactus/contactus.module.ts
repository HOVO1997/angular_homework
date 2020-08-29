import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ContactusComponent} from './contactus.component';

const routes: Routes = [
  {
    path: '',
    component: ContactusComponent
  }
];


@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactusModule { }
