import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrlgetall ='https://localhost:44312/api/Colors/getall';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ColorResponseModel> {
  return  this.httpClient.get<ColorResponseModel>(this.apiUrlgetall);
  }
  
}
