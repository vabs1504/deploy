// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DbservService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DbservService {
 
  constructor(private http:HttpClient) { }
 
  getAllProduct():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
 
}