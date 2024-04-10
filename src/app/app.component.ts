import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private PatientID=""

  constructor() { }

  setHeaderValue(value: string) {
    this.PatientID = value;
  }

  getHeaderValue(): string {
    return this.PatientID;
  }}
