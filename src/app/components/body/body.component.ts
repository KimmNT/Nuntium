import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private _newsservices:NewsapiservicesService) { }

  newsDisplay:any = [];

  ngOnInit(): void {
    this._newsservices.newsAPI()
    .subscribe((result)=>{
      console.log(result);
      this.newsDisplay = result.articles;     
    })
  }
  }
