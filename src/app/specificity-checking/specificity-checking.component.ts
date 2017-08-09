import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specificity-checking',
  templateUrl: './specificity-checking.component.html',
  styleUrls: ['./specificity-checking.component.css']
})
export class SpecificityCheckingComponent implements OnInit {

  GENOME = 0;
  GENOME_OPTIONS = [
    {value: 0, viewValue: 'Maize B73 AGPv3'},
    {value: 1, viewValue: 'baka'}
  ];
  TOTAL_SPECIFICITY_MISMATCH = 2;
  SEND_SPECIFICITY_MISMATCH = 2;
  SEND_MISMATCH_REGION_LENGTH = 5;
  TOTAL_MISMATCH_IGNORE = 6;
  MAX_TARGET_SIZE = 3000;

  constructor() { }

  ngOnInit() {
  }

}
