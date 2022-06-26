import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news api link
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=2&apiKey=5145233856574f12b19032580759e71f"

  newsAPI():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
}
