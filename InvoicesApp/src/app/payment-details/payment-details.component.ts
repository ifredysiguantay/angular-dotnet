import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from '../shared/payment-details.model';
import { PaymentDetailsService } from '../shared/payment-details.service';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailsService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetails){
    this.service.formData = Object.assign( {},selectedRecord);
  }

  onDelete(id:number){
    this.service.deletePaymentDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toast.error('Eliminado exitosamente','Factura registrada correctamente')
      },
      err => {console.log(err)}
    )
  }


}
