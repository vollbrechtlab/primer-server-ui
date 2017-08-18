import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

import { P3Service } from '../p3.service';
import { SettingFormValidationService } from '../setting-form-validation.service';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {

  settingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private p3Service: P3Service,
    private sfvService: SettingFormValidationService
  ) { }

  ngOnInit() {
    this.settingForm = this.fb.group({
      SEQUENCE_TEMPLATE_INPUT: ['', [
        Validators.required,
        this.sfvService.sequenceTemplateValidator()
      ]],
      PRIMER_PICK_LEFT_PRIMER: [true],
      SEQUENCE_PRIMER: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_INTERNAL_OLIGO: [false],
      SEQUENCE_INTERNAL_OLIGO: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PICK_RIGHT_PRIMER: [true],
      SEQUENCE_PRIMER_REVCOMP: ['', this.sfvService.nucleotideSequenceValidator()],
      PRIMER_PRODUCT_SIZE_MIN: [null],
      PRIMER_PRODUCT_SIZE_MAX: [null],
      SEQUENCE_TARGET: ['', this.sfvService.targetRegionValidator()],
      SEQUENCE_EXCLUDED_REGION: [''],
      PRIMER_MIN_TM: [57],
      PRIMER_OPT_TM: [60],
      PRIMER_MAX_TM: [63],
      PRIMER_PAIR_MAX_DIFF_TM: [3],
      PRIMER_SALT_CORRECTIONS: [1],
      PRIMER_TM_FORMULA: [1],
    });

    this.sfvService.settingForm = this.settingForm;

  }

}

