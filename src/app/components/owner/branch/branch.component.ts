import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { htmlTextExtractor } from 'src/app/app.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})
export class BranchComponent implements OnInit {
  constructor(private router: Router) {}
  extractor = htmlTextExtractor;
  ngOnInit(): void {}
  domier(string: string, index) {
    return (document.querySelectorAll('div.overlay')[index].innerHTML = string);
  }
}
