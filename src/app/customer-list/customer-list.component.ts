import { Component, OnInit } from '@angular/core';
import { CreateService } from './../create.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    customers: any;

  constructor(private customerService: CreateService) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      console.log(customers);
      this.customers = customers;
      console.log(customers);
    });
  }

  // deleteCustomers() {
  //   this.customerService.deleteAll().catch(err => console.log(err));
  // }

}
