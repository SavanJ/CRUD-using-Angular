import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList } from '@angular/fire/database';

import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class CreateService {	

	customersRef : AngularFireList<Customer> = null;

	private dbPath = '/crud'

  constructor( private db: AngularFireDatabase ) { 
  		this.customersRef = db.list(this.dbPath);	
   }

    insertCustomer(customer : Customer) {
    this.customersRef.push(customer);
    console.log('Data created Successfully');
  }

  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }

    updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

}	
