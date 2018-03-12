import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { ParamsValidationService } from '../params-validation/params-validation.service';


@Component({
  selector: 'app-specificity-checking',
  templateUrl: './specificity-checking.component.html',
  styleUrls: ['./specificity-checking.component.css']
})
export class SpecificityCheckingComponent implements OnInit {

  GENOME_OPTIONS = [
    {value: 0, viewValue: 'Maize B73 AGPv3'},
    {value: 1, viewValue: 'baka'}
  ];


  specForm: FormGroup;

  constructor(
    private pvService : ParamsValidationService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.specForm = this.fb.group({
      GENOME: [0, this.pvService.simpleValidator('GENOME')],
      TOTAL_SPECIFICITY_MISMATCH: [2, this.pvService.simpleValidator('TOTAL_SPECIFICITY_MISMATCH')],
      SEND_SPECIFICITY_MISMATCH: [2, this.pvService.simpleValidator('SEND_SPECIFICITY_MISMATCH')],
      SEND_MISMATCH_REGION_LENGTH: [5, this.pvService.simpleValidator('SEND_MISMATCH_REGION_LENGTH')],
      TOTAL_MISMATCH_IGNORE: [6, this.pvService.simpleValidator('TOTAL_MISMATCH_IGNORE')],
      MAX_TARGET_SIZE: [3000, this.pvService.simpleValidator('MAX_TARGET_SIZE')]
    });
  }

}
