import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
  }

  createAccount(){
    const body  = this.form.value;

    console.log(body);
    
  }

}
