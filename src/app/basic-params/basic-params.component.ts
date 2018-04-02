import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { BASIC_SETTINGS_CONST } from '../../environments/basic-settings';

import { DataService } from '../data-share/data.service';
import { ParamsValidationService } from '../params-validation/params-validation.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';

@Component({
  selector: 'app-basic-params',
  templateUrl: './basic-params.component.html',
  styleUrls: ['./basic-params.component.css']
})
export class BasicParamsComponent implements OnInit {

  e = BASIC_SETTINGS_CONST ; // environement variables

  settingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dataService: DataService,
    private paramsValidationService: ParamsValidationService,
    public dDialogService: DescriptionDialogService
  ) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    let max, min;
    if(this.dataService.main.task.primer3_data.PRIMER_PRODUCT_SIZE_RANGE.length < 1){
      min = 100;
      max = 300;
    } else {
      min = this.dataService.main.task.primer3_data.PRIMER_PRODUCT_SIZE_RANGE[0][0];
      max = this.dataService.main.task.primer3_data.PRIMER_PRODUCT_SIZE_RANGE[0][1];
    }
    this.settingForm = this.fb.group({
      SEQUENCE_TEMPLATE_INPUT: [this.dataService.main.task.primer3_data.SEQUENCE_TEMPLATE, this.paramsValidationService.sequenceTemplateValidator()],
      PRIMER_PICK_LEFT_PRIMER: [this.dataService.main.task.primer3_data.PRIMER_PICK_LEFT_PRIMER, this.paramsValidationService.pickLeftPrimerValidator()],
      SEQUENCE_PRIMER: [this.dataService.main.task.primer3_data.SEQUENCE_PRIMER, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_PRIMER")],
      PRIMER_PICK_INTERNAL_OLIGO: [this.dataService.main.task.primer3_data.PRIMER_PICK_INTERNAL_OLIGO, this.paramsValidationService.pickInternalOligoValidator()],
      SEQUENCE_INTERNAL_OLIGO: [this.dataService.main.task.primer3_data.SEQUENCE_INTERNAL_OLIGO, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_INTERNAL_OLIGO")],
      PRIMER_PICK_RIGHT_PRIMER: [this.dataService.main.task.primer3_data.PRIMER_PICK_RIGHT_PRIMER, this.paramsValidationService.pickRightPrimerValidator()],
      SEQUENCE_PRIMER_REVCOMP: [this.dataService.main.task.primer3_data.SEQUENCE_PRIMER_REVCOMP, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_PRIMER_REVCOMP")],
      PRIMER_PRODUCT_SIZE_MIN: [min, this.paramsValidationService.productSizeMinValidator()],
      PRIMER_PRODUCT_SIZE_MAX: [max, this.paramsValidationService.productSizeMaxValidator()],
      SEQUENCE_TARGET: [this.paramsValidationService.convertArrToStrList(this.dataService.main.task.primer3_data.SEQUENCE_TARGET), this.paramsValidationService.sequenceRegionValidator('SEQUENCE_TARGET')],
      SEQUENCE_EXCLUDED_REGION: [this.paramsValidationService.convertArrToStrList(this.dataService.main.task.primer3_data.SEQUENCE_EXCLUDED_REGION), this.paramsValidationService.sequenceRegionValidator('SEQUENCE_EXCLUDED_REGION')],
      PRIMER_MIN_TM: [this.dataService.main.task.primer3_data.PRIMER_MIN_TM, this.paramsValidationService.tmMinValidator()],
      PRIMER_OPT_TM: [this.dataService.main.task.primer3_data.PRIMER_OPT_TM, this.paramsValidationService.tmOptValidator()],
      PRIMER_MAX_TM: [this.dataService.main.task.primer3_data.PRIMER_MAX_TM, this.paramsValidationService.tmMaxValidator()],
      PRIMER_PAIR_MAX_DIFF_TM: [this.dataService.main.task.primer3_data.PRIMER_PAIR_MAX_DIFF_TM, this.paramsValidationService.tmDiffValidator()],
      PRIMER_SALT_CORRECTIONS: [this.dataService.main.task.primer3_data.PRIMER_SALT_CORRECTIONS, this.paramsValidationService.saltCorrectionValidator()],
      PRIMER_TM_FORMULA: [this.dataService.main.task.primer3_data.PRIMER_TM_FORMULA, this.paramsValidationService.thermoParamValidator()],
    });

    this.paramsValidationService.settingForm = this.settingForm;

    // To show the error for the first time
    this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER'].markAsTouched();
    this.settingForm.controls['SEQUENCE_INTERNAL_OLIGO'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER_REVCOMP'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MIN'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MAX'].markAsTouched();
    this.settingForm.controls['SEQUENCE_TARGET'].markAsTouched();
    this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].markAsTouched();
    this.settingForm.controls['PRIMER_MIN_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_OPT_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_MAX_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_PAIR_MAX_DIFF_TM'].markAsTouched();
    this.settingForm.controls['PRIMER_SALT_CORRECTIONS'].markAsTouched();
    this.settingForm.controls['PRIMER_TM_FORMULA'].markAsTouched();
  }

}

