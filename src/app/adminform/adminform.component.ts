import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrl: './adminform.component.css'
})
export class AdminformComponent {
  popup = 0
  constructor(
    private http: HttpClient,
    private router: Router,
    private appservice: AppService
  ) { }
  form = {
    name: '',
    emailid: '',
    phone:'',
    qualification: '',
    specialist: '',
    image: ''
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.form.image = event.target.files[0]; // Store the selected file in the form object
    }
  }
  doctorInfo() {
    const formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('emailid', this.form.emailid);
    formData.append('phonenumber', this.form.phone);

    formData.append('qualification', this.form.qualification);
    formData.append('specialist', this.form.specialist);
    formData.append('image', this.form.image);
    this.appservice.DoctorInfo(formData, "/post/doctor").then((response) => {
      console.log(response)

    }).catch((error) => {
      console.log("Error while posting", error)

    })
    //  this.http.post("http://localhost:4000/post/doctor",this.form)
    //  .subscribe(
    //   (response)=>{
    //         console.log(response)
    //   },
    //   (error)=>{
    //         console.log("Error while posting",error)
    //   }
    //  )

  }
  popchange() {
    if (this.popup == 1) {
      this.popup = 0
    } else {
      this.popup = 1
    }
    setTimeout(() => {
      this.router.navigate(['/adminpage']);

    }, 1000);

  }



}
