import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
url="http://localhost:3000/Signup"
  constructor(private  http: HttpClient) {}
  getdata() {
  return this.http.get<any>(this.url)
  }
  save_form(data:any){
    // console.log(data);
    return this.http.post<any>(this.url,data)
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentUser(id:number){
    return this.http.get(`${this.url}/${id}`)
  }
  update(id:number,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
