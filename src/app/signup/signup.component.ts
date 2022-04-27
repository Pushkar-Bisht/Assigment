import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import {FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //define signup Form
  SignupForm=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private service: SignupService) { }
formdata(){
  // console.log(this.SignupForm.value)
  this.service.save_form(this.SignupForm.value).subscribe((result)=>{
    console.log(result);
    // this.sub=true
    this.SignupForm.reset()
  })
}
  ngOnInit(): void {
  }

}
