import { Component, OnInit } from '@angular/core';
import {SignupService} from "../signup.service";
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
//define signup Form
  editSignupForm=new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    address:new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private  service: SignupService) { }

  ngOnInit(): void {
    var ID=this.router.snapshot.params['id'];
    this.service.getCurrentUser(ID).subscribe((result:any)=>{

      console.log(result);
      this.editSignupForm=new FormGroup({
        firstname:new FormControl(result.firstname),
        lastname:new FormControl(result.lastname),
        email:new FormControl(result.email),
        password:new FormControl(result.password),
        address:new FormControl(result.address)
      })

    })
  }
  updateForm(){
    console.log(this.editSignupForm.value);
    this.service.update(this.router.snapshot.params['id'],this.editSignupForm.value).subscribe((result)=>{
      console.log();
      // this.sub=true

    })

  }

}
