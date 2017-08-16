import { NgModule } from '@angular/core';
import { AutoCompleteModule, 
         InputTextModule, 
         ButtonModule,
         DialogModule } from 'primeng/primeng';

@NgModule({
  exports: [
    AutoCompleteModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ]
})
export class PrimengModule { }

