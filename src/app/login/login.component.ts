import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId!: string;
  password!: string;
  
  constructor(private http:HttpClient,private toastr:ToastrService) {}
  ngOnInit(): void {
  }
  login() {
     const userObj={
      emailId:this.emailId,
      password:this.password,
     };
     const url="http://localhost:8000/user/login";
     this.http.post(url,userObj).subscribe((res:any)=>{
       console.log(res);
       localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
       localStorage.setItem("isLoggedIn", "true");
       localStorage.setItem("ROLE", res.role);

       this.toastr.success("Login successfully");
       

     },(err)=>{
       console.log(err.error);
       this.toastr.error( err.error.message);
     })
  }
}
