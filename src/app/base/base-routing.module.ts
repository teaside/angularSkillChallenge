import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
      path: '',
      component: BaseComponent,
      // children: [
      //     {
      //         path: 'measurements',
      //         loadChildren: './modules/measurements/measurements.module#MeasurementsModule'
      //     },
      //     {
      //         path: 'filters',
      //         loadChildren: './modules/filters/filters.module#FiltersModule'
      //     },
      //     {
      //         path: 'equipment',
      //         loadChildren: './modules/equipment/equipment.module#EquipmentModule'
      //     },
      //     {
      //         path: 'settings',
      //         loadChildren: './modules/settings/settings.module#SettingsModule'
      //     }
      // ]
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
