import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { p3Params, p3Options } from '../../environments/p3-params';

import { DataService } from '../data-share/data.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';
import { ParamsValidationService } from '../params-validation/params-validation.service';

@Component({
  selector: 'app-additional-params',
  templateUrl: './additional-params.component.html',
  styleUrls: ['./additional-params.component.css']
})
export class AdditionalParamsComponent implements OnInit {

  myControl: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  selectedParams: any[] = [];
  selectedParamNames: string[] = [];

  paramOption: string;

  formGroup:FormGroup;

  constructor(
    private dataService: DataService,
    public dDialogService: DescriptionDialogService,
    private pvService: ParamsValidationService
  ){ }
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

    this.formGroup = new FormGroup({});
  }

  /**
   * filter parameters
   */
  simple_filter(val: string): string[] {
    return p3Options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  /**
   * filter parameters
   */
  filter(val: string): string[] {
    let filtered : string[] = [];
    for(let option of p3Options) {
      if(option != null && val != null && option.toLowerCase().includes(val.toLowerCase())) {
        filtered.push(option);
      }
    }
    return filtered;
  }
  
  /**
   * add new parameter to the list
   */
  add(){
    let temp = p3Params[this.paramOption];
    if(temp == null){
      console.error("option doesnt exist")
    } else {
      if(!this.selectedParamNames.includes(this.paramOption)){
        this.selectedParams.push(temp);
        this.selectedParamNames.push(this.paramOption);
        
        this.formGroup.addControl(this.paramOption, new FormControl(this.dataService.main.task.primer3_data[this.paramOption], this.pvService.simpleValidator(this.paramOption)))
      }
      this.paramOption = '';
    }
  }

  /**
   * Remove parameter from the list
   */
  remove(name:string){
    // find which param to delete
    let i = 0;
    for(i = 0; i < this.selectedParamNames.length; i++){
      if(this.selectedParamNames[i] == name){
        break;
      }
    }
    // delete
    this.selectedParamNames.splice(i, 1);
    this.selectedParams.splice(i, 1);
    this.formGroup.removeControl(name);

    // delete from share data as well
    this.dataService.main.task.primer3_data[name] = undefined;
  }

  reset2(){
    // delete all selected params first
    for(let name of this.selectedParamNames){
      this.dataService.main.task.primer3_data[name] = undefined;
    }
    this.selectedParams = [];
    this.selectedParamNames = [];
    this.paramOption = null;
    this.formGroup = new FormGroup({});
  }

  /**
   * Update list based on current main task
   */
  reset(){
    // delete all selected params first
    this.selectedParams = [];
    this.selectedParamNames = [];
    this.paramOption = null;
    this.formGroup = new FormGroup({});

    // then add new params from data service
    for(let name of Object.keys(this.dataService.main.task.primer3_data)){
      if(name != null && p3Params[name]['setting_type'] == 'additional'){
        console.log(name)
        this.selectedParamNames.push(name);
        this.selectedParams.push(p3Params[name]);
        this.formGroup.addControl(name, new FormControl(this.dataService.main.task.primer3_data[name], this.pvService.simpleValidator(name)));
      } 
    }
  }

}
