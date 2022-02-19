import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PurchasedetailesService } from 'src/app/services/purchasedetailes/purchasedetailes.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { SupplierProfile } from '../../owner/supplier-profile/supplier-profile.model';
// import { Branch } from '../../branch/branch.modal';
// import { BranchManagerService } from '../../branch/services/branch-manager/branch-manager.service';
// import { SupplierProfile } from '../../owner/supplier-profile/supplier-profile.model';
import { Purchasedetiles } from './purchase-detailes.modal';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.scss'],
})
export class PurchaseDetailsComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  branch: Branchmanager;
  data: Purchasedetiles = {
    invoice_no: null,
    date: undefined,
    // total_amt: 0,
    // company: '',
    // transaction_type: '',
    branches: '',
    qty: 0,
    total_amt: 0,
    vat_percenatge: 0,
    vat_amount: 0,
    gross_amt: 0,
    invoice_type: '',
    company: '',
    Description: '',
    suppier_name: '',
    price: 0,
    Unit: '',
    net_amount_sum: 0,
    gross_amt_sum: 0,
    net_vat_sum: 0,
    updated_at: new Date(),
  };
  branchesList: Branch[] = [];
  // Customer: CustomerProfile[] = [];
  supplierList: SupplierProfile[] = [];
  purchase: Purchasedetiles[] = [];
  // editMode = false;
  net_amount_sum: Purchasedetiles[] = [];
  net_vat_sum: Purchasedetiles[] = [];
  gross_amt_sum: Purchasedetiles[] = [];

  // paymentin: Credit[] = [];
  // amount: Credit[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private supplierService: SupplierProfileService,
    private modalService: BsModalService,
    private purchases: PurchasedetailesService // private paymentservice: PaymentInService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
    // this.purchase.get_purchase_detailes().subscribe((res) => {
    //   this.purchase = res.data;
    // });
  }
  public onReset(): void {
    clearForm('Form');
  }

  onSubmit(): void {
    if (validateForm('Form')) {
      // console.log(this.data);
      this.purchases.get_purchase_detailes(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('purchase-detailes Added Successfully');
          this.purchase = res.data.data;
          console.log(this.data);
          this.net_amount_sum = res.data.total.net_amount_sum;
          this.net_vat_sum = res.data.total.net_vat_sum;
          this.gross_amt_sum = res.data.total.gross_amt_sum;
          // this.paymentin = res.data[res.data.length - 1].amount;
          clearForm('Form');

          this.ngOnInit();
        }
      });
    }
  }

  // Supplierlistin(): void {
  //   this.supplierService.get_supplier_profile().subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       console.log(res.data);
  //       this.supplierList = res.data;
  //     }
  //   });
  // }

  Supplierlistin(): void {
    this.supplierService
      .get_branchwais_supplier_profile(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);

          this.supplierList = res.data;
        }
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
