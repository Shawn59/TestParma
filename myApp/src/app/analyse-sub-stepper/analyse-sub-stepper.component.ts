import {Component, OnInit, Input, ViewChild, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-analyse-sub-stepper',
  templateUrl: './analyse-sub-stepper.component.html',
  styleUrls: ['./analyse-sub-stepper.component.scss']
})
export class AnalyseSubStepperComponent implements OnInit {

    constructor(private _formBuilder: FormBuilder) {

    }

    panelOpenState = false;
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    @ViewChild('subStepper') private myStepper: MatStepper;
    @Input() subSelectedIndex : object;

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

  clickStep(stepper: MatStepper) {
      //console.log(this.subSelectedIndex.value);
      //this.subSelectedIndex.value = stepper.selectedIndex;
     // console.log(this.subSelectedIndex + ' ' + this.myStepper.selectedIndex);

  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goForward(stepper: MatStepper){
    stepper.next();
  }

}
