import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetail } from '../models/rentalDetail';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrlgetdetail ='https://localhost:44312/api/Rentals/getrentaldetails';
  
  constructor(private httpClient: HttpClient) {}

  getRentalDetails():Observable<RentalDetailResponseModel> {
    return  this.httpClient.get<RentalDetailResponseModel>(this.apiUrlgetdetail);
    }
}
