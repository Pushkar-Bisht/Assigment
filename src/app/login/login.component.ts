import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// define login form
LoginForm=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.http.get<any>("http://localhost:3000/Signup").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.LoginForm.value.email && a.password===this.LoginForm.value.password
      });
      if(user){
        alert("Login Sucess");
        this.LoginForm.reset();
        this.router.navigate(['listuser'])
      }
      else{
        alert("user not found")
      }
    },err=>{
      alert("Something wrong")
    })
  }
  
}
