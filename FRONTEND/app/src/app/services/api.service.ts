import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token:string | null = localStorage.getItem('token');


  constructor(private http:HttpClient) { }


  getCompaniesList(){

    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer '+this.token);

    return this.http.get(environment.server+'/api/company/list', { headers: headers });
  }
}
