import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import {MdDialog} from '@angular/material';

import { P3Service } from '../p3.service';
import { SettingFormValidationService } from '../setting-form-validation.service';
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';

@Component({
  selector: 'app-sequence-settings',
  templateUrl: './sequence-settings.component.html',
  styleUrls: ['./sequence-settings.component.css']
})
export class SequenceSettingsComponent implements OnInit {

  settingForm: FormGroup;

  constructor(
    private dialog: MdDialog,
    private fb: FormBuilder,
    public p3Service: P3Service,
    private sfvService: SettingFormValidationService,
    private descriptionDialogService: DescriptionDialogService
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
      PRIMER_PRODUCT_SIZE_MIN: [null, this.sfvService.productSizeMinValidator()],
      PRIMER_PRODUCT_SIZE_MAX: [null, this.sfvService.productSizeMaxValidator()],
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

    // To show the error for the first time
    this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER'].markAsTouched();
    this.settingForm.controls['SEQUENCE_INTERNAL_OLIGO'].markAsTouched();
    this.settingForm.controls['SEQUENCE_PRIMER_REVCOMP'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MIN'].markAsTouched();
    this.settingForm.controls['PRIMER_PRODUCT_SIZE_MAX'].markAsTouched();

  }

  /**
   * Show the description dialog
   * @param {string} paramName Parameter name of the description to show
   */
  showDescription(paramName: string){
    this.descriptionDialogService.description = this.p3Service.params[paramName].description;
    this.dialog.open(DescriptionDialogComponent);
  }

}

