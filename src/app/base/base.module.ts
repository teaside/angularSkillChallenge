import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { Routes } from '@angular/router';



const routes: Routes = [
  {
      path: '',
      loadChildren: './base.module#BaseModule',
      // canActivate: [AuthGuard]
  },
  // { path: 'page500', loadChildren: './page500/page500.module#Page500Module' },
  // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
  ]
})
export class BaseModule { }
