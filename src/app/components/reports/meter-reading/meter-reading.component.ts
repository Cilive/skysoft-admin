import { Component, OnInit } from '@angular/core';
import { DispensesService } from 'src/app/services/dispenses/dispenses.service';
import { MeterReadigService } from 'src/app/services/meter-readig/meter-readig.service';

@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss'],
})
export class MeterReadingComponent implements OnInit {
  readings = [];
  from: Date = new Date();
  to: Date = new Date();
  dispenses: { name: string; id: number }[];
  selectedDispense = '';
  constructor(
    private meterReadingService: MeterReadigService,
    private dispense: DispensesService
  ) {}

  ngOnInit(): void {
    this.dispense.get_dispenses().subscribe((res) => {
      this.dispenses = res.data;
    });
  }
  onSelectDispense() {
    this.meterReadingService
      .getReports(this.selectedDispense)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
