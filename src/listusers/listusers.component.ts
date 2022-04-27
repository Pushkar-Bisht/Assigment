import { Component, OnInit } from '@angular/core';
import{SignupService} from "../signup.service";
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private  service:SignupService) { }
  collection:any=[]
  ngOnInit(): void {
    this.service.getdata().subscribe((result)=>{
      // console.warn(result);
      this.collection=result
      console.log(this.collection);


    })
  }
  delete(id:number){
    console.log(id);
    this.collection.splice(id-1,1)
    this.service.delete(id).subscribe((result)=>{
      console.log(result);

    })
  }

}
