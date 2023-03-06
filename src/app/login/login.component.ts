import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service:AuthService, private route:Router, private http:HttpClient) {
      sessionStorage.clear();
      // this.onLogin()
     }

    userdata:any;
    id:any
    role:any
    loggedUser:any
   

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

ngOnInit():void{}
loginForm=new FormGroup({
  username:new FormControl('', [Validators.required]),
 password: new FormControl('', [Validators.required]),
});
onLogin(){
this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
 const userdata= res.find((a:any)=>{
  return a.username===this.loginForm.value.username &&
  a.password===this.loginForm.value.password

 });
if(userdata){
  this.toastr.success()
 if(userdata.role==='admin'|| userdata.role==='ADMIN'){
console.log('admin')
this.toastr.success('Admin Login successfull')
this.route.navigate(['admin'])
 }else{
  console.log('user')
  this.toastr.success('User Login successfull')
  this.route.navigate(['user'])
  console.log("user id is ", userdata.role+ userdata.id)
 }

}
else{
  this.toastr.warning('Wrong user details')
}

})

}
}