import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  constructor(private http:HttpClient) { }

  getActivitiesSectors(){
    return this.http.get(environment.server+'/public/v1/activities-sectors/list')
  }
}
