import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [ Validators.email,Validators.required ] ),
    password: new FormControl('', [Validators.required])
  })

  loading:boolean = false;

  error:string='';

  
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  connect(){

    this.loading = true;
    this.error ='';


    const user = {
      email:this.form.value.email,
      password:this.form.value.password
      
    }


    console.log(user);

    // async
    // job <= time ? WE DONT KNOW

    this.auth.auth(user).toPromise()
    .then((success:any)=>{
      console.log(success);

      if (success.token) {
        this.auth.saveToken(success.token);

        // redirect to home page !!
        this.router.navigateByUrl('');
        
      }
      
    }).catch((err:HttpErrorResponse)=>{
      console.log(err);
      
      if (err.status == 401) {
        this.error='Wrong email or password.'
      }else{
        this.error='Please check your network and try again.'
      }


    }).finally(()=>{
      this.loading = false;
    })


    



  }

}
