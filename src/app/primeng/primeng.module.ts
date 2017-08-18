import { NgModule } from '@angular/core';
import { AutoCompleteModule, 
         InputTextModule, 
         ButtonModule } from 'primeng/primeng';

@NgModule({
  exports: [
    AutoCompleteModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }

