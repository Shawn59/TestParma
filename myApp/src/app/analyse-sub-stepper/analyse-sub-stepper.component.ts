import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

}
