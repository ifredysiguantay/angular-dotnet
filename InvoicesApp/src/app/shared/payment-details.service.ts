import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';

import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetails = new PaymentDetails();
  list:PaymentDetails[];
  
  readonly baseUrl = 'http://localhost:5000/api/Invoice'
  postPaymentDetail(){
    return this.http.post(this.baseUrl,this.formData)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData)
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res=>this.list = res as PaymentDetails[]);
  }


}
