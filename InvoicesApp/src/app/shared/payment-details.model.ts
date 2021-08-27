import { DecimalPipe } from "@angular/common";

export class PaymentDetails {
    id:number=0;
    nombre:string='';
    nit:string='';
    fecha:Date=new Date();;
    correlativo:string='';
    producto:string='';
    precio:number=0;
    cantidad:number=0;
    total:number=0;
}

