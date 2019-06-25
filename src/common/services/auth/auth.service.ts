import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private loginUser = "http://lcpo002a.rnd.pncint.net:5500/loginUser";

  constructor(private httpClient:HttpClient) { }

 
  public isAuthorized(username:string, password:string):Observable<boolean>{
        let subject= new Subject<boolean>();
        var body={username: username, password: password};

        this.httpClient.post(this.loginUser,  body).subscribe(
            ((response:HttpResponse<any>)=>{
              //  console.log(response);
             subject.next(true);
            }),
            ((error:HttpErrorResponse)=>{
                subject.next(false);
            })
        );
        return subject.asObservable();
  }
}
