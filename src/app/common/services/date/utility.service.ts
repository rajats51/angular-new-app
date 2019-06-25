import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpClient: HttpClient) {
  }

  getServerDate(): Observable<HttpResponse<any>> {
    const hostURL = '/favicon.ico';
    return this.httpClient.get(hostURL, {observe: 'response', responseType: 'blob'});
  }

}
