export class P3Params{
  data = [
    // additional
    {'param_name': 'SEQUENCE_INTERNAL_EXCLUDED_REGION', 'view_name': 'internal excluded regions', 'description':'some description', 'value':null},
    {'param_name': 'SEQUENCE_INCLUDED_REGION', 'view_name': 'included regions', 'description':'some description', 'value':null},
    {'param_name': 'SEQUENCE_FORCE_LEFT_END', 'view_name': 'force left end', 'description':'some description', 'value':null},
  ]

  length: number;
  params: Array<string>;
  names: Array<string>;
  ids: Array<number>;

  constructor(){
    this.length = this.data.length;
    this.params = [];
    this.names = [];
    this.ids = [];
    for(let i = 0; i < this.length; i++){
      this.params.push(this.data[i]['param_name']);
      this.names.push(this.data[i]['view_name']);
      this.ids.push(i);
    }
  }

  setValue(param: string, value: any){
    for(let i = 0; i < this.length; i++){
      if(this.data[i]['param_name'] === param){
        this.data[i]['value'] = value;
      }
    }
  }

  searchData(searchStr: string){
    let filteredData = [];
    for(let i = 0; i < this.length; i++){
      let mixedStr = this.data[i]['param_name'] + this.data[i]['view_name'];
      if(mixedStr.toLowerCase().includes(searchStr.toLowerCase())){
        filteredData.push(i);
      }
    }
    console.log(filteredData);
    return filteredData;
  }
}