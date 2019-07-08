import { Component, OnInit , OnChanges, Input } from '@angular/core';
import { PatientService } from '../patient-detail/service/patient.service';
import { filter } from 'minimatch';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnChanges {
  @Input() filterBy?: string ="All"
  PATIENTS: any[] = [];

  constructor(private patientService : PatientService) { 
    this.PATIENTS = this.patientService.getPatients();
  }

  checkTF(patient : any){
    if (patient.status === "Open"){
     return true;
    }
  }
  checkOption(statuss : string,patient : any){
      // for (var i = 0; i < this.PATIENTS.length; i++){
      //   if (this.PATIENTS[i] === patient){
      //     this.PATIENTS[i].status = statuss;
      //   }
      patient.status = statuss;
     return true;
    
  }
  changOption(patient : any){
    patient.status = "Closed";
    return true;
  }


  ngOnInit() {
  }

  ngOnChanges(){
    this.PATIENTS = this.patientService.getPatients();
  }

}
