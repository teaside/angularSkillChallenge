import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
      path: '',
      loadChildren: './base/base.module#BaseModule',
      // canActivate: [AuthGuard]
  },
  // { path: 'page500', loadChildren: './page500/page500.module#Page500Module' },
  // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
