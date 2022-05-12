import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applyleavelist',
  templateUrl: './applyleavelist.component.html',
  styleUrls: ['./applyleavelist.component.css']
})
export class ApplyleavelistComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllleave();
  }
  leavelist:any;
  getAllleave()
  {
    const url="http://localhost:8000/applyLeave/list";
    this.http.get(url).subscribe((res)=>{
      this.leavelist = res;
    
    },err=>{
    }
    )
  }
}


