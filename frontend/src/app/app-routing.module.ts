import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCashflowComponent } from './create-cashflow/create-cashflow.component';

const routes: Routes = [

  {path: 'create-cashflow', component: CreateCashflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
