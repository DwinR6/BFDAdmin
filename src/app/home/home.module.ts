import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementComponent } from './views/management/management.component';

import { HomeRoutingModule } from './home-routing.module';

//Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';




import { SidenavComponent } from './views/sidenav/sidenav.component';
import { DrivingComponent } from './views/driving/driving.component';
import { TaxiDriversComponent } from './views/taxi-drivers/taxi-drivers.component';
import { CustomersComponent } from './views/customers/customers.component';
import { SettingsComponent } from './views/settings/settings.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';


@NgModule({
  declarations: [
    ManagementComponent,
    SidenavComponent,
    DrivingComponent,
    TaxiDriversComponent,
    CustomersComponent,
    SettingsComponent,
    DonutChartComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
