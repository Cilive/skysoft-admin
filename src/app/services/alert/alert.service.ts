import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toast?: ToastrService) {}
  success(msg: string) {
    return this.toast.success(msg,'',{easeTime:200,});
  }
  danger(msg:string,title?:string){
    return this.toast.error(msg,title,{easeTime:200,})
}
}
