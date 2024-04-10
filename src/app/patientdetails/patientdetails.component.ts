import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrl: './patientdetails.component.css'
})
export class PatientdetailsComponent {
  patient: any[] = [];
  constructor(private http: HttpClient, private appservice: AppService) { }

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.appservice.PatientList({}, "/patientlist").then((response) => {

      console.log("Response ", response.message);
      if (response.status === 'success') {
        this.patient = response.message; // Assign the "message" array to the doctors array
      } else {
        console.error('Error fetching doctors: Invalid response status');
      }
    }
    ).catch((error) => {
      console.error('Error fetching doctors:', error);

    })
  }
  // this.http.get<any>('http://localhost:4000/patientlist')
  //   .subscribe(
  //     (response) => {
  //       console.log("Response ", response.message);
  //       if (response.status === 'success') {
  //         this.patient = response.message; // Assign the "message" array to the doctors array
  //       } else {
  //         console.error('Error fetching doctors: Invalid response status');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching doctors:', error);
  //     }
  //   );
}

