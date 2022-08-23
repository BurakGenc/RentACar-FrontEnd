import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrlgetall ='https://localhost:44312/api/Brands/getall';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<BrandResponseModel> {
  return  this.httpClient.get<BrandResponseModel>(this.apiUrlgetall);
  }
 
}
