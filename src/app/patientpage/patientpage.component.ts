import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validator } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppService } from '../app.service';
@Component({
  selector: 'app-patientpage',
  templateUrl: './patientpage.component.html',
  styleUrl: './patientpage.component.css'
})
export class PatientpageComponent {
  doctor: any[] = [];
  isSpecial: any = true
  content: any = "Book Appointment"
  // Testing:any=true
  constructor(private http: HttpClient,
    private form: FormBuilder,
    private appservice: AppService
  ) { }
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.appservice.DoctorGet({}, "/doctor/get").then((response) => {

      if (response.status === 'success') {
        this.doctor = response.message; // Assign the "message" array to the doctors array
      } else {
        console.error('Error fetching doctors: Invalid response status');
      }

    }).catch((error) => {
      console.log("error fetching doctors,", error)

    })
    // this.http.get<any>('http://localhost:4000/doctor/get')
    //   .subscribe(
    //     (response) => {
    //       if (response.status === 'success') {
    //         this.doctor = response.message; // Assign the "message" array to the doctors array
    //       } else {
    //         console.error('Error fetching doctors: Invalid response status');
    //       }
    //     },
    //     (error) => {
    //       console.log("error fetching doctors,", error)
    //     }
    //   )
  }
  change() {
    this.isSpecial = false
    this.content = "Appointment Successful"
    // this.Testing=false
  }

  // checkoutForm = this.form.group({
  //   name: '',
  //   email: '',
  //   purpose:'',
  //   number:0,
  //   doctor:'',
  //   date:'',
  //   time:''
  // });
  checkoutForm = new FormGroup({
    patientid: new FormControl('if not already Exit enter NEW', Validators.required),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    purpose: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    number: new FormControl(0, [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required])
  })

  onSubmit(): void {

    const name = this.checkoutForm.get('name')
    const email = this.checkoutForm.get('email')
    const purpose = this.checkoutForm.get('purpose')

    const doctor = this.checkoutForm.get('doctor')

    const number = this.checkoutForm.get('number')

    const date = this.checkoutForm.get('date')
    const time = this.checkoutForm.get('time')



    if (!name?.value || !email?.value || !purpose?.value || !doctor?.value || !number?.value || !date?.value || !time?.value) {
      alert("Enter Patient Details")
      return
    }
    this.change()
    const formData = this.checkoutForm.value;
    console.log("form data here ", formData)
    this.http.post<any>('http://localhost:4000/patient/details', formData)
      .subscribe(
        (response) => {
          console.log('Form submission successful:', response);
          this.checkoutForm.reset();
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
  }

}
