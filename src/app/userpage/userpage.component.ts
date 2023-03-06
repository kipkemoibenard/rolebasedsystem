
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  userDetails:any=[];
  user!:any;
  constructor(private service: AuthService, private router:Router) {
    this.usersPresent()
  }
  // OnInit():void{
  //   this.usersPresent()
  // }

  usersPresent(){
    this.service.GetByCode(this.user).subscribe(res => {
      
      this.userDetails=res;
    })

    
  }

 onClick() {
    this.router.navigate(['login'])
  }
}
