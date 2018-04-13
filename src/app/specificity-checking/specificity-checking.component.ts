import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import { ParamsValidationService } from '../params-validation/params-validation.service';
import { DataService } from '../data-share/data.service';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-specificity-checking',
  templateUrl: './specificity-checking.component.html',
  styleUrls: ['./specificity-checking.component.css']
})
export class SpecificityCheckingComponent implements OnInit {

  GENOME_OPTIONS;

  specForm: FormGroup;

  constructor(
    private pvService : ParamsValidationService,
    private fb : FormBuilder,
    public dataService : DataService,
    private serverService : ServerService
  ) { }

  ngOnInit() {
    this.serverService.getJson('assets/config.json').subscribe(data => {
      this.GENOME_OPTIONS = data['GENOME_OPTIONS'];
      this.specForm.controls['GENOME'].setValue(this.GENOME_OPTIONS[0].value);
    });
    this.reset();
  }

  reset(){
    this.specForm = this.fb.group({
      GENOME: [this.dataService.main.task.spec_check.GENOME, this.pvService.specValidator('GENOME')],
      TOTAL_SPECIFICITY_MISMATCH: [this.dataService.main.task.spec_check.TOTAL_SPECIFICITY_MISMATCH, this.pvService.specValidator('TOTAL_SPECIFICITY_MISMATCH')],
      SEND_SPECIFICITY_MISMATCH: [this.dataService.main.task.spec_check.SEND_SPECIFICITY_MISMATCH, this.pvService.specValidator('SEND_SPECIFICITY_MISMATCH')],
      SEND_MISMATCH_REGION_LENGTH: [this.dataService.main.task.spec_check.SEND_MISMATCH_REGION_LENGTH, this.pvService.specValidator('SEND_MISMATCH_REGION_LENGTH')],
      TOTAL_MISMATCH_IGNORE: [this.dataService.main.task.spec_check.TOTAL_MISMATCH_IGNORE, this.pvService.specValidator('TOTAL_MISMATCH_IGNORE')],
      MAX_TARGET_SIZE: [this.dataService.main.task.spec_check.MAX_TARGET_SIZE, this.pvService.specValidator('MAX_TARGET_SIZE')],
      RUN_SPEC_CHECK: [this.dataService.main.task.spec_check.RUN_SPEC_CHECK, this.pvService.specValidator('RUN_SPEC_CHECK')]
    });
  }

}
