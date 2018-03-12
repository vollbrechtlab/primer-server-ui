import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BasicParamsComponent } from './basic-params/basic-params.component';
import { AdditionalParamsComponent } from './additional-params/additional-params.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { ResultComponent } from './result/result.component';
import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';

import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { ParamsValidationService } from './params-validation/params-validation.service';
import { DataService } from './data-share/data.service';
import { ServerService } from './server/server.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicParamsComponent,
    AdditionalParamsComponent,
    SpecificityCheckingComponent,
    ResultComponent,
    DescriptionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [
    DescriptionDialogService,
    ParamsValidationService,
    DataService,
    ServerService
  ],
  entryComponents: [DescriptionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
