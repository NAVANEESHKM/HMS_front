import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})

export class DoctorloginComponent {
  block_hider=1
  response_pin=''
  pin:any=''
  formnew = {
    pin: '',
   
  }
  email: any
  constructor(
    private form: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private appservice: AppService
  ) { }

  checkoutForm = this.form.group({
    email: "",
    password: ""
  })

  onSubmit(): void {
    const formData = this.checkoutForm.value;
    this.email = formData.email
    console.log("form data here ", formData)
    this.appservice.DoctorLogin(formData, "/doctor/login").then((response) => {
      console.log("Check the status here ", response.message)
      if (response.message == "Found") {
        this.response_pin=response.otp
        localStorage.setItem("DoctorEmail", this.email)
        this.block_hider=0
        //this.router.navigate(['doctorpage'])
      }
      this.checkoutForm.reset();
    }).catch((error) => {
      console.error('Error submitting form:', error);

    })
    // this.http.post<any>('http://localhost:4000/doctor/login', formData)
    //   .subscribe(
    //     (response) => {
    //       console.log("Check the status here ",response.message)
    //       if(response.message=="Found"){
    //         localStorage.setItem("DoctorEmail",this.email)
    //            this.router.navigate(['doctorpage'])
    //       }
    //       this.checkoutForm.reset();
    //     },
    //     (error) => {
    //       console.error('Error submitting form:', error);
    //     }
    //   );
  }
  pinchecker(){
    console.log("..........cons",".....",this.formnew.pin,"......",this.response_pin)
    if(this.formnew.pin==this.response_pin){
      console.log("inside if ")
              this.router.navigate(['doctorpage'])

    }
  }

}
