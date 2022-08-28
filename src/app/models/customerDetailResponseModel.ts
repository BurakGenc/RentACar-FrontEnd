import { responseModel } from "./responseModel";
import { CustomerDetail } from "./customerDetail";
export interface CustomerDetailResponseModel extends responseModel{
    data:CustomerDetail[],
}