import { RentalDetail } from "./rentalDetail";
import { responseModel } from "./responseModel";

export interface RentalDetailResponseModel extends responseModel{
    data: RentalDetail[]
}