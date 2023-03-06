import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage.component';


const routes: Routes = [
  {path:'', component:UserpageComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
