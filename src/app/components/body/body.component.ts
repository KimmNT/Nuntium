import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _newsservices:NewsapiservicesService) { }

  // khai báo ARRAY để nhận giá trị trả về từ object
  newsDisplay:any = [];
  sportHomeDisplay:any = [];
  healthHomeDisplay:any = [];
  bussinessHomeDisplay:any = [];
  entertainmentHomeDisplay:any = [];
  scienceHomeDisplay:any = [];
  techHomeDisplay:any = [];
  bbcHomeDisplay:any = [];
  abcHomeDisplay:any = [];
  bitcoinHomeDisplay:any = [];

  // đăng ký ARRAY, thực hiện nhận giá trị trả về từ object chuyển thành chuỗi
  ngOnInit(): void {
    this._newsservices.newsAPI()
    .subscribe((result)=>{
      console.log(result);
      this.newsDisplay = result.articles;     
    })
    this._newsservices.sportHome()
    .subscribe((result)=>{
      console.log(result);
      this.sportHomeDisplay = result.articles;  
    })
    this._newsservices.healthHome()
    .subscribe((result)=>{
      console.log(result);
      this.healthHomeDisplay = result.articles;  
    })
    this._newsservices.bussinessHome()
    .subscribe((result)=>{
      console.log(result);
      this.bussinessHomeDisplay = result.articles; 
    })
    this._newsservices.entertainmentHome()
    .subscribe((result)=>{
      console.log(result);
      this.entertainmentHomeDisplay = result.articles; 
    })
    this._newsservices.scienceHome()
    .subscribe((result)=>{
      console.log(result);
      this.scienceHomeDisplay = result.articles; 
    })
    this._newsservices.techHome()
    .subscribe((result)=>{
      console.log(result);
      this.techHomeDisplay = result.articles; 
    })
    this._newsservices.bccHomme()
    .subscribe((result)=>{
      console.log(result);
      this.bbcHomeDisplay = result.articles; 
    })
    this._newsservices.abcHome()
    .subscribe((result)=>{
      console.log(result);
      this.abcHomeDisplay = result.articles; 
    })
    this._newsservices.bitcoinHome()
    .subscribe((result)=>{
      console.log(result);
      this.bitcoinHomeDisplay = result.articles; 
    })
  }
  }
