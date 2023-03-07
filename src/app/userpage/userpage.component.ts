
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Todo } from '../todo/todo';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  public userDetails: Todo | undefined;
  userId!: number;
  loggedUser:Todo[] = [];
  
  
  

  constructor(private service: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    // this.usersPresent()
   

  }

  ngOnInit(): void {
    // @ts-ignore
    this.userId = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.userId);

    this.usersPresent();
  }
  usersPresent() {
    this.service.getByCode(this.userId).subscribe(res => {
      
      this.loggedUser =Object.values(res);
      console.log(this.loggedUser);
   

    })



  }

  onClick() {
    this.router.navigate(['login'])
  }
}
