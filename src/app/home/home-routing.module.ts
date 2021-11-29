import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.guard';
import { CustomersComponent } from './views/customers/customers.component';
import { DrivingComponent } from './views/driving/driving.component';
import { ManagementComponent } from './views/management/management.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { TaxiDriversComponent } from './views/taxi-drivers/taxi-drivers.component';

const routes: Routes = [
  {
    path: '', component: SidenavComponent, canActivate: [ AuthGuard ],
    children: [
      { path: 'management', component: ManagementComponent, canActivate: [ AuthGuard ] },
      { path: 'driving', component: DrivingComponent, canActivate: [ AuthGuard ] },
      { path: 'taxi-drivers', component: TaxiDriversComponent, canActivate: [ AuthGuard ] },
      { path: 'customers', component: CustomersComponent, canActivate: [ AuthGuard ] },
      { path: 'settings', component: SettingsComponent, canActivate: [ AuthGuard ] },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
