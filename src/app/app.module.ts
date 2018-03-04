import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BasicParamsComponent } from './basic-params/basic-params.component';
import { AdditionalParamsComponent } from './additional-params/additional-params.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { ResultComponent } from './result/result.component';
import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { ParamsValidationService } from './params-validation/params-validation.service';
import { P3DataService } from './p3-data/p3-data.service';


@NgModule({
  declarations: [
    AppComponent,
    BasicParamsComponent,
    AdditionalParamsComponent,
    SpecificityCheckingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DescriptionDialogService,
    ParamsValidationService,
    P3DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
