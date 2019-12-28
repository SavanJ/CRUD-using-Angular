import { Component } from '@angular/core';

import { CreateService } from './create.service';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'crud';

  customer: Customer = new Customer();

  constructor(private CreateService: CreateService) { }

  submit(form)
  {
  	// console.log(form);
  	// console.log(form.value.email);
  	// console.log(form.value.password);
    this.customer = new Customer();

    this.customer.email = form.value.email;
    this.customer.password = form.value.password;

    this.CreateService.insertCustomer(this.customer);
    form.reset();

  }

}
