import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { SPEC_CHECK_CONST } from '../../environments/specificity-checking';

import { ParamsValidationService } from '../params-validation/params-validation.service';


@Component({
  selector: 'app-specificity-checking',
  templateUrl: './specificity-checking.component.html',
  styleUrls: ['./specificity-checking.component.css']
})
export class SpecificityCheckingComponent implements OnInit {

  e = SPEC_CHECK_CONST; // environement variables

  specForm: FormGroup;

  constructor(
    private pvService : ParamsValidationService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.reset();
  }

  reset(){
    this.specForm = this.fb.group({
      GENOME: [this.e.GENOME_OPTIONS[0]['value'], this.pvService.specValidator('GENOME')],
      TOTAL_SPECIFICITY_MISMATCH: [2, this.pvService.specValidator('TOTAL_SPECIFICITY_MISMATCH')],
      SEND_SPECIFICITY_MISMATCH: [2, this.pvService.specValidator('SEND_SPECIFICITY_MISMATCH')],
      SEND_MISMATCH_REGION_LENGTH: [5, this.pvService.specValidator('SEND_MISMATCH_REGION_LENGTH')],
      TOTAL_MISMATCH_IGNORE: [6, this.pvService.specValidator('TOTAL_MISMATCH_IGNORE')],
      MAX_TARGET_SIZE: [3000, this.pvService.specValidator('MAX_TARGET_SIZE')]
    });
  }

}
