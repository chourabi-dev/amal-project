import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  auth(user:any){
    return this.http.post( environment.server+'/auth/login',user)
  }


  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  createAccount(body:any){
    
    return this.http.post( environment.server+'/auth/signup',body)
    
  }

  
}
