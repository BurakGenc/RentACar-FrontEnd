import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardetailResponseModel } from '../models/carDetailResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrlgetall ='https://localhost:44312/api/Cars/getall';
  apiUrlgetdetail ='https://localhost:44312/api/Cars/getcardetails';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel> {
  return  this.httpClient.get<CarResponseModel>(this.apiUrlgetall);
  }
  getCarDetails():Observable<CardetailResponseModel> {
    return  this.httpClient.get<CardetailResponseModel>(this.apiUrlgetdetail);
    }
}
