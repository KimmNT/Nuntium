import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news api link
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=5145233856574f12b19032580759e71f"
  sportHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=2&apiKey=5145233856574f12b19032580759e71f";
  healthHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=2&apiKey=5145233856574f12b19032580759e71f";
  bussinessHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=2&apiKey=5145233856574f12b19032580759e71f";
  entertainmentHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=2&apiKey=5145233856574f12b19032580759e71f";
  scienceHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=2&apiKey=5145233856574f12b19032580759e71f";
  techHomeApi = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=2&apiKey=5145233856574f12b19032580759e71f";

  // Gán object nhận giá trị trả về từ API
  newsAPI():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  sportHome():Observable<any>{
    return this._http.get(this.sportHomeApi);
  }
  healthHome():Observable<any>{
    return this._http.get(this.healthHomeApi);
  }
  bussinessHome():Observable<any>{
    return this._http.get(this.bussinessHomeApi);
  }
  entertainmentHome():Observable<any>{
    return this._http.get(this.entertainmentHomeApi);
  }
  scienceHome():Observable<any>{
    return this._http.get(this.scienceHomeApi);
  }
  techHome():Observable<any>{
    return this._http.get(this.techHomeApi);
  }
}
