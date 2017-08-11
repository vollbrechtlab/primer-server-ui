import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {P3Params} from '../p3-params';

@Component({
  selector: 'app-additional-param',
  templateUrl: './additional-param.component.html',
  styleUrls: ['./additional-param.component.css']
})
export class AdditionalParamComponent {

  paramCtrl: FormControl;
  filteredParamIds: any;

  params: P3Params;
  paramId: number;

  constructor() {
    this.params = new P3Params();

    this.paramCtrl = new FormControl();
    // Observable will be returned
    this.filteredParamIds = this.paramCtrl.valueChanges
        .startWith(null)
        .map(ids => this.filterParamIds(ids));
  }

  filterParamIds(val: string) {
    if(val){
      return this.params.searchData(val);
    } else {
      return this.params.ids; 
    }
  }

  paramSelected(id){
    this.paramId = id;
    console.log('selected ' + id);
  }
}
