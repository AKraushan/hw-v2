import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private authSer:AuthService,private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(5)]),
      password: new FormControl('', [Validators.required])
    })
  }
  ngOnInit() {
    
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.authSer.doLogin(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(['/admin']);
      })
      
      
    }
  }
  
}
