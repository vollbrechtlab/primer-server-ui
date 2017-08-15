import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {AutoCompleteModule, InputTextModule} from 'primeng/primeng';

import {P3Service} from '../p3.service';

@Component({
  selector: 'app-additional-param',
  templateUrl: './additional-param.component.html',
  styleUrls: ['./additional-param.component.css']
})
export class AdditionalParamComponent {

  selectedParams: any[];
  filteredParamsMultiple: any[];

  constructor(private p3Service: P3Service) { }

  ngOnInit(){
  }
  
  filterParamMultiple(event) {
    let query = event.query;
    this.filteredParamsMultiple = this.filterParam(query, this.p3Service.params);
  }
  
  filterParam(query, params: any):any[] {
    let filtered : any[] = [];
    let param_names = Object.keys(params);
    for(let i = 0; i < param_names.length; i++) {
      let param_name = param_names[i];
      if(param_name.toLowerCase().includes(query.toLowerCase())) {
        let param = params[param_name];
        param['name'] = param_name;
        filtered.push(param);
      }
    }
    return filtered;
  }

  onInputTextChange(event){
    console.log(event);
  }
        
}
