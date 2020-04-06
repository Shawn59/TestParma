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
    @Input() subSelectedIndex;

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

  clickStep(event: any) {
      //console.log(event);
      this.subSelectedIndex.value = event.selectedIndex;

  }

  goBack(){
    this.myStepper.previous();
  }

  goForward(){
    this.myStepper.next();
  }

}
