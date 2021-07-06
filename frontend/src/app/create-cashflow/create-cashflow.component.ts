import { Component, OnInit } from '@angular/core';
import { Cashflow } from '../cashflow';
import { CashflowServiceService } from '../cashflow-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cashflow',
  templateUrl: './create-cashflow.component.html',
  styleUrls: ['./create-cashflow.component.css']
})
export class CreateCashflowComponent implements OnInit {
  cashflow: Cashflow = new Cashflow();
  constructor(private CashflowServiceService: CashflowServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCashflow(){

    this.cashflow.cashFlow=this.cashflow.resultatNet+this.cashflow.dotationsnettesProvisions-this.cashflow.plusaluesCession
    +this.cashflow.moinsvaluesCession+this.cashflow.variationRoulement;

    this.CashflowServiceService.createcashflow(this.cashflow).subscribe( data =>{
      console.log(data);
     
    },
    error => console.log(error));
  }

 
  
  onSubmit(){
    console.log(this.cashflow);
    this.saveCashflow();
  }
}
