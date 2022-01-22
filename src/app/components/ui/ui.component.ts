import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  constructor(
    private test: AuthenticationService,
    private store: StoreService
  ) {}
  companies: any = [];
  editMode;
  data: any = {};
  selectFile;
  ngOnInit(): void {
    this.test.newToken(this.store.retrieve('token')).subscribe((res) => {
      new StoreService().store('access', res.access);
    });
  }
  openModal(a) {}
  onEdit(a) {}
  suspend(a) {}
  decline() {}
  onDelete(a) {}
  onReset() {}
  onSubmit() {}
  update() {}
}
