import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _IsLogedIn = new BehaviorSubject<boolean>(false)
  public _Role = new BehaviorSubject<any>([''])
  constructor() { }

  doLogin({username, password}:any):Observable<any>{

    if(username==="Admin" && password==="Admin123"){
      this.setToken("jhsakDFSbdgadbaDJKGadbkhgdbSDBKSGH,jhsakDFSbdgadbaDJKGadbkhgdbSDBKSGHjhsakDFSbdgadbaDJKGadbkhgdbSDBKSGHjhsakDFSbdgadbaDJKGadbkhgdbSDBKSGHjhsakDFSbdgadbaDJKGadbkhgdbSDBKSGH,jhsakDFSbdgadbaDJKGadbkhgdbSDBKSGHjhsakDFSbdgadbaDJKGadbkhgdbSDBKSGH");
      this._IsLogedIn.next(true);
      this._Role.next(['Admin']);
      return of({name:"Admin",email:"admin@gmail.com",role:'Admin'});
      
    }
    return throwError(new Error("Faild to login"))
    
  }

  setToken(token:string):void{
    localStorage.setItem('schooltoken',token);
  }

  getToken():string | null{
    return localStorage.getItem('schooltoken');
  }

  IsLogedIn():boolean{
    if(this.getToken() === null || this.getToken() === ''){
      return false;
    }
    else{
      return true;
    }
  }
  doLogout():void{
    localStorage.clear();
  }
}
