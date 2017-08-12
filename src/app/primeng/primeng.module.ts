import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AutoCompleteModule, InputTextModule} from 'primeng/primeng';

@NgModule({
  exports: [
    AutoCompleteModule,
    InputTextModule
  ]
})
export class PrimengModule { }

