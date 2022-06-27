import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }

  // constructor(private _newsservices:NewsapiservicesService) { }

  // testApiDisplay:any = [];

  // ngOnInit(): void {
  //   this._newsservices.testVideo()
  //   .subscribe((result)=>{
  //     console.log(result);
  //     this.testApiDisplay = result;
      
  //   })
  // }

}
