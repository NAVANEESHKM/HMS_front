import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-medicinepage',
  templateUrl: './medicinepage.component.html',
  styleUrl: './medicinepage.component.css'
})
export class MedicinepageComponent {
  Medicine: any[]=[]
  constructor(private appservice:AppService){
  }
  ngOnInit(){
    this.fetchDoctors()
  }
      image="./medicine.jpg"
      fetchDoctors() {
        this.appservice.GetMedicine({}, "/medicines").then((response) => {
    
          console.log("Response ", response.message);
          if (response.status === 'success') {
            this.Medicine = response.message; // Assign the "message" array to the doctors array
            console.log("Medicine ",this.Medicine)
          } else {
            console.error('Error fetching doctors: Invalid response status');
          }
        }
        ).catch((error) => {
          console.error('Error fetching doctors:', error);
    
        })
      }
      AddLocal(medicine:any,price:any,age:any,description:any){
               localStorage.setItem("medicinename",medicine)
               localStorage.setItem("price",price)
               localStorage.setItem("age",age)
               localStorage.setItem("description",description)



      }
}
