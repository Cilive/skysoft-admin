import { Component, OnInit } from '@angular/core';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';

@Component({
  selector: 'app-invoicelisting',
  templateUrl: './invoicelisting.component.html',
  styleUrls: ['./invoicelisting.component.scss'],
})
export class InvoicelistingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
//  onSubmit() {
//     if (validateForm('cashForm')) {
//       this.Cash.post_invoicelisting(this.data).subscribe((res) => {
//         if (res.msg === 'Success') {
//           this.toast.success('invoice open successfully');
//           // clearForm('cashForm');
//           this.ngOnInit();
//         }
//       });
//     }
//   }
