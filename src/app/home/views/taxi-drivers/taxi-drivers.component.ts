import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
//import { customersmodel } from 'src/app/modelos/customersmodel';
import { taxidrivermodel } from 'src/app/modelos/taxidriversmodel';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddTaxidriverComponent } from '../add-taxidriver/add-taxidriver.component';

@Component({
  selector: 'app-taxi-drivers',
  templateUrl: './taxi-drivers.component.html',
  styleUrls: ['./taxi-drivers.component.scss']
})
export class TaxiDriversComponent implements OnInit {

  
  ELEMENT_DATA: taxidrivermodel[] = [
    {IDs: "01", Vehicle: "Sedan", Name: "Bryan Villanueva", State: "Maryland"},
    {IDs: "02", Vehicle: "Suv", Name: "Edwin Noel", State: "DC"},
    {IDs: "03", Vehicle: "Mini Van", Name: "Arteaga Albery", State: "Maryland"},
    {IDs: "04", Vehicle: "Sendan", Name: "David Alvarado", State: "Maryland"},
    {IDs: "04", Vehicle: "Suv", Name: "Justo Ectali", State: "Maryland"},
    {IDs: "04", Vehicle: "Sendan", Name: "Fernando Alvarado", State: "Maryland"},
    {IDs: "04", Vehicle: "Suv", Name: "Elias Hernandez", State: "Maryland"},
    {IDs: "04", Vehicle: "Sendan", Name: "Bryan Villanueva", State: "Maryland"},
  ];



  //ELEMENT_DATA: customersmodel[] = [
  //  {IDs: "01", User: "Bryanv97", Name: "Bryan Villanueva", State: "Maryland"},
  //  {IDs: "02", User: "DwinR6", Name: "Edwin Noel", State: "DC"},
  //  {IDs: "03", User: "Art3Aga", Name: "Arteaga Albery", State: "Maryland"},
  //  {IDs: "04", User: "Bryanv97777", Name: "Bryan Villanueva", State: "Maryland"},
  // 
  //];
  displayedColumns: string[] = ['Name', 'Vehicle', 'State','Actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //dataSource = this.ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  //matDialog: any;
  
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  add_customer(){
    this.matDialog.open(AddTaxidriverComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
