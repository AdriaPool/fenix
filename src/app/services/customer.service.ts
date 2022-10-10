import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VM } from '../models/vm';
import { Customer, ICustomersList } from '../models/customer';
import { vmData } from '../models/vmData';
import { Template } from '../models/template';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { Group } from '../models/group';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(public http: HttpClient, public errorService: ErrorService, @Inject('BASE_URL') private baseUrl: string) { }

public getAllCustomers() {
  return this.http.get<ICustomersList[]>(this.baseUrl + 'api/Customer').pipe(
    catchError(this.errorService.handleError));
}

public getAllCustomersTwo() {
  return this.http.get<Customer[]>(this.baseUrl + 'api/Customer').pipe(
    catchError(this.errorService.handleError));
}

public getAllGroupsForCustomer(id: string) {
  return this.http.get<Group[]>(this.baseUrl + 'api/Customer/' + id + '/' + 'groups').pipe(
    catchError(this.errorService.handleError));
}

public getCustomer(id: string) {
  return this.http.get<Customer[]>(this.baseUrl + 'api/Customer' + id).pipe(
    catchError(this.errorService.handleError));
}

}


