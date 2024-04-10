import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrl: './addmedicine.component.css'
})
export class AddmedicineComponent {
  constructor(
    private appservice:AppService,
    private form: FormBuilder,

  ){}
  checkoutForm=new FormGroup({
    medicinename:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required]),
    price:new FormControl(0,[Validators.required]),
    description:new FormControl('',[Validators.required])
  })
  MedicineData(){
    const newval=this.checkoutForm.value
    this.appservice.PostMedicine(newval,"/addmedicine").then((response)=>{
                        console.log(response)

    }).catch((error)=>{
              console.log("Error while posting",error)

    })
  }
}
