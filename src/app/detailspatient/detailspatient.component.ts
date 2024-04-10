import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Component, OnInit } from '@angular/core';
import Chart, { Color } from 'chart.js/auto';
@Component({
  selector: 'app-detailspatient',
  templateUrl: './detailspatient.component.html',
  styleUrl: './detailspatient.component.css'
})
export class DetailspatientComponent {
  constructor(
    private AppComponent: AppComponent,
    private http: HttpClient,
    private AppService: AppService
  ) { }

  patientid: any;
  patientdetails: any;
  ngOnInit(): void {
    this.setheader();
    this.getpatient();
  }
  setheader() {
    this.patientid = this.AppComponent.getHeaderValue()
  }

  getpatient() {
    const sender = { 'patientid': this.patientid }
    this.AppService.GetPatient(sender, "/patient/detailsupdate").then((response) => {
      console.log("Response ", response.message);
      if (response.status === 'success') {
        this.patientdetails = response.message; // Assign the "message" array to the doctors array
      } else {
        console.error('Error fetching doctors: Invalid response status');
      }
    }).catch((error) => {
      console.error('Error fetching doctors:', error);

    })
  }
   lineChartData = [
    {
      name: 'Series 1',
      series: [
        { name: 'January', value: 10 },
        { name: 'February', value: 20 },
        { name: 'March', value: 15 },
        { name: 'April', value: 25 },
        { name: 'May', value: 30 }
      ]
    },
    {
      name: 'Series 2',
      series: [
        { name: 'January', value: 15 },
        { name: 'February', value: 25 },
        { name: 'March', value: 20 },
        { name: 'April', value: 30 },
        { name: 'May', value: 35 }
      ]
    }
  ];

  colorScheme = 'vivid'; // Or any other pre-defined color scheme


}
