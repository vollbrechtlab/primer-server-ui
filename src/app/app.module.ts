import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimengModule } from './primeng/primeng.module';

import { AppComponent } from './app.component';
import { Primer3Service } from './primer3.service';
import { P3Service } from './p3.service';
import { DescriptionDialogService } from './description-dialog/description-dialog.service';
import { SettingFormValidationService } from './setting-form-validation.service';

import { AdditionalParamComponent } from './additional-param/additional-param.component';
import { SequenceSettingsComponent } from './sequence-settings/sequence-settings.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { ResultAreaComponent } from './result-area/result-area.component';

import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';

import { ChartsModule } from 'ng2-charts';
import { SqBarChartComponent } from './sq-bar-chart/sq-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionalParamComponent,
    SequenceSettingsComponent,
    SpecificityCheckingComponent,
    SubmitAreaComponent,
    ResultAreaComponent,
    DescriptionDialogComponent,
    SqBarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    Primer3Service,
    P3Service,
    DescriptionDialogService,
    SettingFormValidationService
  ],
  entryComponents: [
    DescriptionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
