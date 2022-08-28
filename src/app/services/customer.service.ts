import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { CustomerDetailResponseModel } from '../models/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrlgetdetail ='https://localhost:44312/api/Customers/getcustomerdetails';
  constructor(private httpClient: HttpClient) { }

 
  getCustomerDetails():Observable<CustomerDetailResponseModel> {
    return  this.httpClient.get<CustomerDetailResponseModel>(this.apiUrlgetdetail);
    }
}
