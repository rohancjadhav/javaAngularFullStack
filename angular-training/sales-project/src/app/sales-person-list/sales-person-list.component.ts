import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

//create an array of sales person objects
salesPersonList: SalesPerson[] = [
new SalesPerson("anup","kumar","anup@gmail.com",10000),
new SalesPerson("john","doe","johndoe@gmail.com",20000),
new SalesPerson("rohan","jadhav","rohancjadhav@gmail.com",30000),
new SalesPerson("asha","jadhav","ashacjadhav@gmail.com",40000),
];

  constructor() { }

  ngOnInit(): void {
  }

}
