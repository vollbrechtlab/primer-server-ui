import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

import { P3DataService } from '../p3-data/p3-data.service';
import { ParamsValidationService } from '../params-validation/params-validation.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';

@Component({
  selector: 'app-basic-params',
  templateUrl: './basic-params.component.html',
  styleUrls: ['./basic-params.component.css']
})
export class BasicParamsComponent implements OnInit {

  settingForm: FormGroup;

  private fileReader = new FileReader();

  constructor(
    private fb: FormBuilder,
    public p3Service: P3DataService,
    private paramsValidationService: ParamsValidationService,
    public dDialogService: DescriptionDialogService
  ) { }

  ngOnInit() {
    this.settingForm = this.fb.group({
      SEQUENCE_TEMPLATE_INPUT: ['', this.paramsValidationService.sequenceTemplateValidator()],
      PRIMER_PICK_LEFT_PRIMER: [true, this.paramsValidationService.pickLeftPrimerValidator()],
      SEQUENCE_PRIMER: [null, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_PRIMER")],
      PRIMER_PICK_INTERNAL_OLIGO: [false, this.paramsValidationService.pickInternalOligoValidator()],
      SEQUENCE_INTERNAL_OLIGO: [null, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_INTERNAL_OLIGO")],
      PRIMER_PICK_RIGHT_PRIMER: [true, this.paramsValidationService.pickRightPrimerValidator()],
      SEQUENCE_PRIMER_REVCOMP: [null, this.paramsValidationService.nucleotideSequenceValidator("SEQUENCE_PRIMER_REVCOMP")],
      PRIMER_PRODUCT_SIZE_MIN: [100, this.paramsValidationService.productSizeMinValidator()],
      PRIMER_PRODUCT_SIZE_MAX: [300, this.paramsValidationService.productSizeMaxValidator()],
      SEQUENCE_TARGET: ['', this.paramsValidationService.sequenceRegionValidator('SEQUENCE_TARGET')],
      SEQUENCE_EXCLUDED_REGION: ['', this.paramsValidationService.sequenceRegionValidator('SEQUENCE_EXCLUDED_REGION')],
      PRIMER_MIN_TM: [57, this.paramsValidationService.tmMinValidator()],
      PRIMER_OPT_TM: [60, this.paramsValidationService.tmOptValidator()],
      PRIMER_MAX_TM: [63, this.paramsValidationService.tmMaxValidator()],
      PRIMER_PAIR_MAX_DIFF_TM: [3, this.paramsValidationService.tmDiffValidator()],
      PRIMER_SALT_CORRECTIONS: [1, this.paramsValidationService.saltCorrectionValidator()],
      PRIMER_TM_FORMULA: [1, this.paramsValidationService.thermoParamValidator()],
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


  getFormValidationErrors() {
    Object.keys(this.settingForm.controls).forEach(key => {

      const controlErrors: ValidationErrors = this.settingForm.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          //console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}

