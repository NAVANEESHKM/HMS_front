import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PatientpageComponent } from './patientpage/patientpage.component';
import { DoctorpageComponent } from './doctorpage/doctorpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AdminformComponent } from './adminform/adminform.component';
import { FormsModule } from '@angular/forms';
import { DetailspatientComponent } from './detailspatient/detailspatient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { MedicinepageComponent } from './medicinepage/medicinepage.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { CartComponent } from './cart/cart.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component'; // Import FormsModule
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CompletepatientComponent } from './completepatient/completepatient.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DepartmentsComponent,
    DoctorsComponent,
    PatientloginComponent,
    DoctorloginComponent,
    AdminloginComponent,
    PatientpageComponent,
    DoctorpageComponent,
    AdminpageComponent,
    AdminformComponent,
    DetailspatientComponent,
    PatientdetailsComponent,
    MedicinepageComponent,
    AddmedicineComponent,
    CartComponent,
    AddprescriptionComponent,
    CompletepatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
