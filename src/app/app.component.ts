import { Component, OnInit } from '@angular/core';
import { GetserviceService } from './getservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practicetask';
  storedata;
  rdata: any;
  constructor(private http:GetserviceService)
  {

  }
  ngOnInit()
  {
   return this.get();
 setInterval(()=>this.get(),10000)
  }
  rawdata(x)
  {
    this.rdata=x;
  }
  get()
  {
    return this.http.getdata().subscribe(res=>{console.log(res)
    this.storedata=res['hits']})
  }
}
