import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { Primer3Service } from './primer3.service';
import { AdditionalParamComponent } from './additional-param/additional-param.component';
import { SequenceSettingsComponent } from './sequence-settings/sequence-settings.component';
import { SpecificityCheckingComponent } from './specificity-checking/specificity-checking.component';
import { SubmitAreaComponent } from './submit-area/submit-area.component';
import { ResultAreaComponent } from './result-area/result-area.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionalParamComponent,
    SequenceSettingsComponent,
    SpecificityCheckingComponent,
    SubmitAreaComponent,
    ResultAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [Primer3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
