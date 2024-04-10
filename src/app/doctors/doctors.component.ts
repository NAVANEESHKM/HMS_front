import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor: any[] = [];
  constructor(private http: HttpClient, private appservice: AppService) { }

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.appservice.DoctorGet({}, "/doctor/get").then((response) => {
      console.log("Response ", response.message);
      if (response.status === 'success') {
        this.doctor = response.message; // Assign the "message" array to the doctors array
      } else {
        console.error('Error fetching doctors: Invalid response status');
      }
    })
  }
}