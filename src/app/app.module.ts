import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './companents/car/car.component';
import { BrandComponent } from './companents/brand/brand.component';
import { ColorComponent } from './companents/color/color.component';
import { UserComponent } from './companents/user/user.component';
import { CarImageComponent } from './companents/car-image/car-image.component';
import { RentalComponent } from './companents/rental/rental.component';
import { NaviComponent } from './companents/navi/navi.component';
import { CardetailComponent } from './companents/cardetail/cardetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    UserComponent,
    CarImageComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
