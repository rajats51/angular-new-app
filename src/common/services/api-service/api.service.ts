import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IApiService } from './iapi.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {

  private restApiUrl = "http://lcpo002a.rnd.pncint.net:5500";

  constructor(private http: HttpClient) { }

  public activityOverview(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/home/activity", { userId: "12345" });

  }

  public crewOverview(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/home/crew", { userId: "12345" });
  }

  public solutionActivity(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/activity", { userId: "12345" });

  }

  public solutionDetails(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/details", { userId: "12345" });
  }

  public solutionCrew(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/crew", { userId: "12345" });
  }

  public solutionTimeline(): Observable<any> {

    return this.http.post(this.restApiUrl + "/prospect/solutions/timeline", { userId: "12345" });
  }

  public verifyUser(userName: string): Observable<boolean> {
    let subject = new Subject<boolean>();

    this.http.post(this.restApiUrl + "/verify/user/" + userName, {}).subscribe(
      ((response: HttpResponse<any>) => {

        subject.next(true);
      }),
      ((error: HttpErrorResponse) => {
        subject.next(false);
      })
    );
    return subject.asObservable();
  }
  
  public verifyEmail(code: string): Observable<boolean> {
    let subject = new Subject<boolean>();
    this.http.post(this.restApiUrl + "/verify/email/" + code, {}).subscribe(
      ((response: HttpResponse<any>) => {

        subject.next(true);
      }),
      ((error: HttpErrorResponse) => {
        subject.next(false);
      })
    );
    return subject.asObservable();
  }

  public verifyPhone(code: string): Observable<boolean> {
    let subject = new Subject<boolean>();
    this.http.post(this.restApiUrl + "/verify/phone/" + code, {}).subscribe(
      ((response: HttpResponse<any>) => {

        subject.next(true);
      }),
      ((error: HttpErrorResponse) => {
        subject.next(false);
      })
    );
    return subject.asObservable();
  }
}
