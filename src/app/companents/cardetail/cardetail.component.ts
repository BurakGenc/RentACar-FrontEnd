import { Component, OnInit } from '@angular/core';
import { Cardetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetails:Cardetail[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  
  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
    this.carDetails=response.data
    })
  }
}