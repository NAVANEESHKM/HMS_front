import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { DetailspatientComponent } from './detailspatient/detailspatient.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { MedicinepageComponent } from './medicinepage/medicinepage.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { CartComponent } from './cart/cart.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { CompletepatientComponent } from './completepatient/completepatient.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patientlogin', component: PatientloginComponent },
  { path: 'doctorlogin', component: DoctorloginComponent },
  { path: 'adminlogin', component: AdminloginComponent }, // redirect to `first-component`
  { path: 'patientform', component: PatientpageComponent },
  { path: 'doctorpage', component: DoctorpageComponent },
  { path: 'doctorpage/detailspatient', component: DetailspatientComponent },
  {path:'doctorpage/addprescription',component:AddprescriptionComponent},
  
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'adminpage/adminpageform', component: AdminformComponent },
  { path: 'adminpage/patientdetails', component: PatientdetailsComponent },
   {path:'adminpage/addmedicine',component:AddmedicineComponent},
  { path: 'medicinepage', component: MedicinepageComponent },
  {path:'medicinepage/cart',component:CartComponent},
  {path:'patientform/completedetails',component:CompletepatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
