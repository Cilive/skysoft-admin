import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  tileItems = [
    {
      path: 'authosheet',
      icon: 'bx bx-spreadsheet',
      title: 'Meter Reading',
    },
    // {
    //   path: 'cxd',
    //   icon: 'bx bxs-plane-alt',
    //   title: 'CXD Report',
    // },
    // {
    //   path: 'snag',
    //   icon: 'bx bxs-plane-land',
    //   title: 'Snag Report',
    // },
    // {
    //   path: 'safety',
    //   icon: 'bx bx-check-shield',
    //   title: 'Safety Report',
    // },
    // {
    //   path: 'dispatch',
    //   icon: 'bx bxs-user-voice',
    //   title: 'Dispatch Report',
    // },
    // {
    //   path: 'debriefs',
    //   icon: 'bx bxs-report',
    //   title: 'Debrief Reports',
    // },
    // {
    //   path: 'subjects',
    //   icon: 'bx bx-message-square-add',
    //   title: 'Add Report Subjects',
    // },
    // {
    //   path: 'logs',
    //   icon: 'bx bx-file-blank',
    //   title: 'Logs',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
