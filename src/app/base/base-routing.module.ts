import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
      path: '',
      component: BaseComponent,
      children: [
          {
              path: 'main',
              loadChildren: './main/main.module#MainModule'
          },
          {
              path: 'details',
              loadChildren: './details/details.module#DetailsModule'
          }
      ]
  }, {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
