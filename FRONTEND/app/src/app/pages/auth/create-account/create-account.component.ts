import { APP_ID, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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

  success:string='';
  error:string='';

  constructor(private publicApi:PublicApiService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(){
    this.publicApi.getActivitiesSectors().toPromise().then((res:any)=>{
      this.activities = res;
    })
  }

  createAccount(){

    this.error='';
    this.success='';

    const body  = this.form.value;  

    const payload = {
      email: body.email,
      password: body.password,
      fullName: body.fullname,
      activity: body.activity,
      company: body.company
      

    }

    this.auth.createAccount(payload).toPromise().then((res:any)=>{
      this.success='Account created successfylly.';
    }).catch((err)=>{
      this.error='Error while trying to create your account.';
    })
    
  }

}
