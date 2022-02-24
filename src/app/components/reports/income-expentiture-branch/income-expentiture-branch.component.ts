import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { IncomeExpentitureBranchService } from 'src/app/services/services/income-expentiture-branch/income-expentiture-branch.service';
import { IncomeBranch } from './income-expenditure-branch.modal';

@Component({
  selector: 'app-income-expentiture-branch',
  templateUrl: './income-expentiture-branch.component.html',
  styleUrls: ['./income-expentiture-branch.component.scss'],
})
export class IncomeExpentitureBranchComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  data: IncomeBranch = {
    total_amt: 0,
    type: '',
    to_date: new Date(),
    from_date: new Date(),
    date: '',
    contact: '',
    um: '',
    total_purchase: 0,
    total_sale: 0,
    balance: 0,
  };
  income: IncomeBranch[] = [];
  total_sale: IncomeBranch[] = [];
  total_purchase: IncomeBranch[] = [];
  balance: IncomeBranch[] = [];
  constructor(
    private Income: IncomeExpentitureBranchService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    // this.Income.get_income(this.data).subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     this.toast.success('Income Added Successfully');
    //     this.income = res.data.data;
    //   }
    // });
  }

  public onReset(): void {
    clearForm('Form');
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.Income.get_income(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Income & Expenditure Added Successfully');
          this.income = res.data.data;
          console.log(this.data);
          this.total_purchase = res.data.total.total_purchase;
          this.total_sale = res.data.total.total_sale;
          this.balance = res.data.balance;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
}
