import { Component, OnInit, Input } from '@angular/core';

import { CreateService } from '../create.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

@Input() customer: Customer;

  constructor(private customerService: CreateService) { }

  ngOnInit() {
  }

  //   updateActive(isActive: boolean) {
  //   // this.customerService
  //   //   .updateCustomer(this.customer.key, { active: isActive })
  //   //   .catch(err => console.log(err));
  //   // console.log(this.customer.email);
  // }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }

}
