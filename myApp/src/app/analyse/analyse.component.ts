import { Component, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AnalyseSubStepperComponent } from '../analyse-sub-stepper/analyse-sub-stepper.component';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent {
  @ViewChild('headStepper') private myStepper: MatStepper;
  @ViewChild(AnalyseSubStepperComponent) childAnalyseSubStepper: AnalyseSubStepperComponent;

  leftStepper = {
    parameters: {
      isActive: true,
      subSteppers: {
        perimeter: {
          isActive: false,
        },
        ras: {
          isActive: false,
        }
      }
    },
    macroModel: {
      isActive: false
    }
  };

  subSelectedIndex = {
    value: 0
  };
  constructor() { }

  clickStep(stepper: MatStepper) {
    console.log(this.myStepper);
  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goForward(stepper: MatStepper){
    stepper.next();
  }

}
