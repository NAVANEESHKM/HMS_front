import { Component } from '@angular/core';

@Component({
  selector: 'app-completepatient',
  templateUrl: './completepatient.component.html',
  styleUrl: './completepatient.component.css'
})
export class CompletepatientComponent {
     model={
      birthdayDate:'',
      email:'',
      age:'',
      phone:0,
      country:'',
      maritalStatus:'',
      gender:'',
      bloodGroup:'',
      weight:0,
      address:'',
      height:0
     }
     onSubmit(){
      
     }
}
