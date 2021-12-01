import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { customersmodel } from 'src/app/modelos/customersmodel';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
//export interface PeriodicElement {
//  name: string;
//  position: number;
//  weight: number;
//  symbol: string;
//}

 // User
 // Phone
 // Password
 // Mail
 // Name
 


/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})



export class CustomersComponent implements OnInit {

  ELEMENT_DATA: customersmodel[] = [
    {IDs: "01", User: "Bryanv97", Name: "Bryan Villanueva", State: "Bryan@gmail.com"},
    {IDs: "02", User: "DwinR6", Name: "Edwin Noel", State: "DwinR6@gmail.com"},
    {IDs: "03", User: "Art3Aga", Name: "Arteaga Albery", State: "Art3Aga@gmail.com"},
    {IDs: "04", User: "Davidalv", Name: "David Alvarado", State: "Davidalv@gmail.com"},  
    {IDs: "04", User: "EctalR", Name: "Justo Ectali", State: "EctalR@gmail.com"},  
    {IDs: "04", User: "F4rnand0", Name: "Fernando Alvarado", State: "F4rnand0@gmail.com"},  
    {IDs: "04", User: "Eli4s", Name: "Elias Hernandez", State: "Eli4s@gmail.com"},  
  ];
  displayedColumns: string[] = ['User', 'Name', 'State','Actions'];
  
  //dataSource = this.ELEMENT_DATA;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  add_customer(){
    this.matDialog.open(AddCustomerComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
