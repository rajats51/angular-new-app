import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UtilityService } from '../../common/services/date/utility.service';



@Component({
  selector: 'app-authentication-code',
  templateUrl: './authentication-code.component.html',
  styleUrls: ['./authentication-code.component.scss']
})
export class AuthenticationCodeComponent implements OnInit {
  steps: string[] = [
    'Login',
    'Authentication Code',
    'Password'
  ];
  today: Date = new Date();

  constructor(
    private utilService: UtilityService
  ) { }

  ngOnInit() {
  }

  getServerDate(): void {
    this.utilService.getServerDate()
      .subscribe((resp: HttpResponse<any>) => {
        const serverDate = resp.headers.get('Date');
        this.today = new Date(serverDate);
      });
  }

}