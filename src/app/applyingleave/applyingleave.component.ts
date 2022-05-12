import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-applyingleave',
  templateUrl: './applyingleave.component.html',
  styleUrls: ['./applyingleave.component.css']
})
export class ApplyingleaveComponent implements OnInit {
  id!: string;
  name!: string;
  numberOfDays!: string;
  leaveFromDate!: string;
  leaveToDate!: string;
  reason!: string;
  constructor(private http:HttpClient,private toastr:ToastrService) {}
  ngOnInit(): void {
  }
  applyingleave() {
     const userObj={
        "id":this.id,
        "name":this.name,
        "numberOfDays":this.numberOfDays,
        "leaveFromDate": this.leaveFromDate,
        "leaveToDate":this.leaveToDate,
        "reason":this.reason,

     };
     const url="http://localhost:8000/applyleave/leave";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("Successfully Applyed");
       window.location.href="http://localhost:4200/applyingleave"
     },(err)=>{
       console.log(err);
       this.toastr.error("Please re-enter your Details");
     })
  }
}