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
      SPEC_GENOME: [0, this.pvService.specValidator('SPEC_GENOME')],
      SPEC_TOTAL_SPECIFICITY_MISMATCH: [2, this.pvService.specValidator('SPEC_TOTAL_SPECIFICITY_MISMATCH')],
      SPEC_SEND_SPECIFICITY_MISMATCH: [2, this.pvService.specValidator('SPEC_SEND_SPECIFICITY_MISMATCH')],
      SPEC_SEND_MISMATCH_REGION_LENGTH: [5, this.pvService.specValidator('SPEC_SEND_MISMATCH_REGION_LENGTH')],
      SPEC_TOTAL_MISMATCH_IGNORE: [6, this.pvService.specValidator('SPEC_TOTAL_MISMATCH_IGNORE')],
      SPEC_MAX_TARGET_SIZE: [3000, this.pvService.specValidator('SPEC_MAX_TARGET_SIZE')]
    });
  }

}
