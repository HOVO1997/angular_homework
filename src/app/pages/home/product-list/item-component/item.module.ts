import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ItemComponentComponent} from './item-component.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponentComponent
  }
];

@NgModule({
  declarations: [
    ItemComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemModule { }
