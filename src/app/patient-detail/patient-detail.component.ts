import { Component, OnInit } from '@angular/core';
import { PatientService } from './service/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
