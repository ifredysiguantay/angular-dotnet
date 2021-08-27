import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { PaymentDetails } from 'src/app/shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {
 
  constructor(public service:PaymentDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.id == 0)
    this.insertRecord(form);
    else
    this.updateRecords(form);
    /*this.service.postPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Enviado exitosamente','Factura guardada')
      },
      err=>{console.log(err);}
    )*/
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Informacion enviada correctamente','Factura registrada correctamente')
      },
      err => {console.log(err)}
    )
  }

  updateRecords (form:NgForm){
    this.service.putPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Actualizado correctamente','Factura registrada correctamente')
      },
      err=> {console.log(err);}
    );
  }



  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new PaymentDetails();
  }

  onFocusOutEvent(event:any){
    this.service.formData.total = this.service.formData.precio * this.service.formData.cantidad;
  }

}
