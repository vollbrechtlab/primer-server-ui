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

  allParams: any[];
  selectedParams: any[];
  filteredParamsMultiple: any[];

  constructor(private p3Service: P3Service) { }

  ngOnInit(){
    this.p3Service.getParams().then(params => {
      this.allParams = params;
      //this.selectedParams = [this.allParams[0]];
    });
  }
  
  filterParamMultiple(event) {
    let query = event.query;
    this.filteredParamsMultiple = this.filterParam(query, this.allParams);
  }
  
  filterParam(query, params: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < params.length; i++) {
      let param = params[i];
      let mixedStr = param.view_name + param.param_name;
      if(mixedStr.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(param);
      }
    }
    return filtered;
  }

  onInputTextChange(event){
    console.log(event);
  }
        
}
