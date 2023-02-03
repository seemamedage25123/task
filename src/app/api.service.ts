import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
   
   seemaget(){
    return this.http.get("http://localhost:3000/posts")
   }
  // seemaupdate(id:any,obj:any){
  //   return this.http.put('http://localhost:3000/posts/'+id,obj)
  //  }
}
