import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HotkeysBlockerDirective } from '../hotkeys-blocker.directive';


const appRouts: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'home/:id',
    loadChildren: () => import('../pages/home/product-list/item-component/item.module').then(m => m.ItemModule)
  },
  {
    path : 'about',
    loadChildren: () => import('../pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path : 'contact',
    loadChildren: () => import('../pages/contactus/contactus.module').then(m => m.ContactusModule)
  },
  {
    path : 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'register',
    loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path : '**',
    loadChildren: () => import('../pages/notfound/notfound.module').then(m => m.NotfoundModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HotkeysBlockerDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
})
export class ViewModule {}
