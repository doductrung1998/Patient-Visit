import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  PATIENTS = [];
  getPatients(){
    return this.PATIENTS = Patient.slice(0);
  }
  constructor() { }
}

const Patient = [
  {"day" : "15-Aug-17" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
  {"day" : "10-Aug-12" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
  {"day" : "5-Aug-6" , "time" : "10:00 - 11:05" , "address" : "Quan 7 , TP HCM" , "provider" : "Amstrong jones" , "purpose" : "reassess" , "status" : "Closed"},
];
