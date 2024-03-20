import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  loading:boolean = false;
  companies:any[] = [];



  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDATA();
  }



  getDATA(){
    this.loading = true;
    this.api.getCompaniesList().toPromise().then(
      (res:any)=>{
        this.companies = res;

        console.log(this.companies);
        
      }
    ).catch((err)=>{

    }).finally( ()=>{ this.loading = false; } );

  }


  deleteCompany(id:number){
    console.log("deleted compny N ",id);
    
  }

}
