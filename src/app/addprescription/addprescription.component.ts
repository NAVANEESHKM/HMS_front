import { Component } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrl: './addprescription.component.css'
})
export class AddprescriptionComponent {
  PatientName=localStorage.getItem("CurrentPatientName")
  PatientEmail=localStorage.getItem("CurrentPatientEmail")
  prescription: string[] = [];
  prescriptionInput: string = '';
   constructor(private appservice:AppService){}
  addPrescription() {
    if (this.prescriptionInput.trim() !== '') {
      this.prescription.push(this.prescriptionInput);
      this.prescriptionInput = ''; 
    }
  }
  AddPrecaution(){
    const details={"doctoremail":localStorage.getItem("DoctorEmail"),"doctorname":localStorage.getItem("DoctorName"),"patientid":localStorage.getItem("CurrentPatientID"),"Precaution":this.prescription}
    this.appservice.AddPrescription(details,"/prescription").then((response)=>{
                        console.log(response)

    }).catch((error)=>{
              console.log("Error while posting",error)

    })
  }
}