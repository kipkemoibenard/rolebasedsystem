import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo/todo';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    public service: AuthService, private route: Router, private http: HttpClient) {
    // this.onLogin()
  }

  loginObj: any = {
    username: this.builder.control('', Validators.required), //username must be email
    password: this.builder.control('', Validators.required),
  };

todo: Todo={
  id: 0,
  username: '',
  firstname: '',
  lastname: '',
  role: ''
}; 

getTodo(){
  this.service.getTodo(this.todo.id).subscribe((data) => (this.todo=data));
}

getToken(){
  this.service.getToken();
}
setToken(){
  this.service.setToken();
}
removeToken(){
  this.service.removeToken()
}
// getTodo(){
//   this.service.getTodo(userdata.id)
// }

  // loginForm = this.builder.group({

  //   username: this.builder.control('', Validators.required), //username must be email
  //   password: this.builder.control('', Validators.required)
  // })


  // ngOnInit():void {}
  //   onLogin() {
  //     if (this.loginForm) {
  // this.service.GetAll().subscribe(res=>{
  // this.userdata=res;

  // console.log(this.userdata)

  // if(this.loginForm.value.username===this.userdata.username){

  //   if(this.loginForm.value.password===this.userdata.password){
  //     sessionStorage.setItem('id', JSON.stringify(this.userdata.id));
  //     sessionStorage.setItem('role', JSON.stringify(this.userdata.role));


  //     console.log('tururru');
  //   }
  //   else{
  //     this.toastr.error('incorrect username and password')
  //   }


  // }
  // else{
  //   this.toastr.error('user does not exist')
  // }


  // });
  //     } else {
  // this.toastr.warning('Password or Usename cannot be empty','Please input Valid username and Password');
  //     }

  ngOnInit(): void { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  onLogin() {
    this.http.get<any>("http://localhost:3000/users").subscribe(res => {
      const userdata = res.find((a: any) => {
        return a.username === this.loginForm.value.username &&
          a.password === this.loginForm.value.password

       

      });
      if (userdata) {

        this.toastr.success();
        if (userdata.role === 'admin' || userdata.role === 'ADMIN') {
          console.log('admin')
          this.toastr.success('Admin Login successfull')
          this.route.navigate(['admin'])
        } else {
        
          this.toastr.success('User Login successfull');
      // console.log(this.route.navigate([`'http://localhost:3000/users'/${userdata.id}`]))
      this.route.navigate([`/users/${userdata.id}`]);
          console.log("user role is ", userdata.role+ " user id is " + userdata.id)
         
        console.log(typeof userdata.id+" is type of string") 

          

        }

      }
      else {
        this.toastr.warning('Wrong user details')
      }

    })
    // debugger
    // this.service.onLogin(this.loginForm.value.username && this.loginForm.value.password).subscribe((res: any) => {
    //   console.log('res', res)
    //   localStorage.setItem('token', res.token)
    // })

  }
}

function getTodo() {
  throw new Error('Function not implemented.');
}
function getToken() {
  throw new Error('Function not implemented.');
}
function setToken() {
  throw new Error('Function not implemented.');
}
function removeToken() {
  throw new Error('Function not implemented.');
}


