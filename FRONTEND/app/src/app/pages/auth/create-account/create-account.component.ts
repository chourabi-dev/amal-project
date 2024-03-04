import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicApiService } from 'src/app/services/public-api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  form = new FormGroup({
    fullname: new FormControl('',Validators.required), 
    company: new FormControl('',Validators.required),
    activity: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  })


  activities:any[] = [];



  constructor(private publicApi:PublicApiService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
    this.publicApi.getActivitiesSectors().toPromise().then((res:any)=>{
      this.activities = res;
    })
  }

  createAccount(){
    const body  = this.form.value; 
    console.log(body);
    
  }

}
