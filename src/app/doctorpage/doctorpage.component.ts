import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-doctorpage',
  templateUrl: './doctorpage.component.html',
  styleUrl: './doctorpage.component.css'
})
export class DoctorpageComponent {
  color_check = true
  patients: any[] = []
  checker: any = true
  data_getting: string = ""
  constructor(
    private http: HttpClient,
    private form: FormBuilder,
    private AppComponent: AppComponent,
    private AppService: AppService,
  ) { }
  ngOnInit(): void {
    this.fetchDoctors()
  }
  checkoutForm = this.form.group({
    email: localStorage.getItem("DoctorEmail")
  });

  fetchDoctors() {
    const formData = this.checkoutForm.value;
    this.AppService.DoctorClient(formData, "/doctor/clients").then((response) => {
      console.log("Response ", response.message);
      if (response.status === 'Success') {
        this.patients = response.message.Patients;
        this.color_check = response.message.availability;
        // Assign the "message" array to the doctors array
      } else {
        console.error('Error fetching doctors: Invalid response status');
      }
    }).catch((error) => {
      console.error('Error fetching doctors:', error);

    })
    // this.http.post<any>('http://localhost:4000/doctor/clients', formData)
    //   .subscribe(
    //     (response) => {
    //       console.log("Response ", response.message);
    //       if (response.status === 'Success') {
    //         this.patients = response.message.Patients;
    //         this.color_check= response.message.availability;
    //          // Assign the "message" array to the doctors array
    //       } else {
    //         console.error('Error fetching doctors: Invalid response status');
    //       }
    //     },
    //     (error) => {
    //       console.error('Error fetching doctors:', error);
    //     }
    //   );
  }
  // convertToPDF() {
  //   const element = document.getElementById('download'); // Replace 'htmlContent' with the ID of your HTML content element
  //   html2pdf(element).save('converted-document.pdf');
  // }

  navigateToDetailsPatient(i: any) {
    this.AppComponent.setHeaderValue(this.patients[i].patientid);
  }

  statusupdate() {
    if (this.color_check == true) {
      this.color_check = false;
    } else {
      this.color_check = true
    }
    const formval = { 'email': localStorage.getItem("DoctorEmail"), 'availability': this.color_check }
    this.http.post<any>('http://localhost:4000/doctor/availability', formval)
      .subscribe(
        (response) => {
          console.log("Response ", response.message);
          if (response.status === 'Success') {
            // this.color_check = response.message; // Assign the "message" array to the doctors array
          } else {
            console.error('Error fetching doctors: Invalid response status');
          }
        },
        (error) => {
          console.error('Error fetching doctors:', error);
        }
      );
  }
  SendMail(index: any) {

    const value = { 'emailid': this.patients[index].email, 'patientname': this.patients[index].name, 'doctorname': this.patients[index].doctor, 'time': this.patients[index].time, 'date': this.patients[index].date }

    this.AppService.Sendmail(value, "/sendmail").then((response) => {
      console.log("Response ", response.message);

    }).catch((error) => {
      console.error('Error fetching doctors:', error);

    })
  }

  isToday(timeNow1: string): boolean {
    var val = new Date().toISOString().split('T')[0];
    if (this.data_getting != "") {
      val = this.data_getting
    }
    console.log("Values are printed here", timeNow1, val)

    return timeNow1 === val
  }
  currentdetails(index: any) {
    localStorage.setItem("CurrentPatientName", this.patients[index].name)
    localStorage.setItem("CurrentPatientEmail", this.patients[index].email)
    localStorage.setItem("CurrentPatientID", this.patients[index].patientid)
    localStorage.setItem("DoctorName", this.patients[index].doctor)

  }
}
