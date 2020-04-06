import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.scss']
})
export class PerimeterComponent implements OnInit {

  fields = {
    date: new Date(),
    modelingHorizon: 30,
    historyHorizon: 0,
    analysisGroup: [
      {
        id: 1,
        label: 'Банк-соло',
        active: false,
      },
      {
        id: 2,
        label: 'Банковский сектор',
        active: false,
      }
    ]
  };

  isValid = false;

  ngOnInit(): void {
  }

}
