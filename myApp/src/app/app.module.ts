import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AnalyseComponent } from './analyse/analyse.component';
import { AnalyseSubStepperComponent } from './analyse-sub-stepper/analyse-sub-stepper.component';
import { PerimeterComponent } from './perimeter/perimeter.component';
import { MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AnalyseComponent,
    AnalyseSubStepperComponent,
    PerimeterComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSliderModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
