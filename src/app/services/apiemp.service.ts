import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiempService {

  constructor(private http:HttpClient) { }
  //User defined function
  //all emp list
getdata()
{
return this.http.get('https://jsonplaceholder.typicode.com/users')
}
}