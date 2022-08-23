import { Cardetail } from "./carDetail";
import { responseModel } from "./responseModel";

export interface CardetailResponseModel extends responseModel{
    data:Cardetail[],
}