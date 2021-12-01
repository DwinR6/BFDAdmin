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
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidenavComponent } from './views/sidenav/sidenav.component';
import { DrivingComponent } from './views/driving/driving.component';
import { TaxiDriversComponent } from './views/taxi-drivers/taxi-drivers.component';
import { CustomersComponent } from './views/customers/customers.component';
import { SettingsComponent } from './views/settings/settings.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AddCustomerComponent } from './views/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms'; 
import {MatCardModule} from '@angular/material/card';
import { AddTaxidriverComponent } from './views/add-taxidriver/add-taxidriver.component';

//import { MatFormFieldModule } from '@angular/material/form-field'; 

@NgModule({
  declarations: [
    ManagementComponent,
    SidenavComponent,
    DrivingComponent,
    TaxiDriversComponent,
    CustomersComponent,
    SettingsComponent,
    AddCustomerComponent,
    AddTaxidriverComponent
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
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCardModule
  ]
})
export class HomeModule { }
