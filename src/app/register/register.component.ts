import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: string;
  emailId!: string;
  password!: string;
  branchName!: string;
  mobileNumber!: string;
  dateOfBirth!: string;
  gender!: string;
  role!: string;
  constructor(private http:HttpClient,private toastr:ToastrService) {}
  ngOnInit(): void {
  }
  register() {
     const userObj={
        name:this.name,
        emailId:this.emailId,
        password:this.password,
        branchName: this.branchName,
        mobileNumber:this.mobileNumber,
        dateOfBirth:this.dateOfBirth,
        gender:this.gender,
        role:'USER'
     };
     const url="http://localhost:8000/user/register";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("successfully Registered");
       window.location.href="http://localhost:4200/login"
     },(err)=>{
       console.log(err);
       this.toastr.error("Register Unsuccess");
     })
  }
}