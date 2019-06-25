import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../../../services/date/utility.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.scss']
})
export class PreFooterComponent implements OnInit {

  constructor(private utilService: UtilityService) {}
  today: Date = new Date();

  ngOnInit() {
    this.getServerDate();
  }
  getServerDate(): void {
    this.utilService.getServerDate()
                          .subscribe((resp: HttpResponse<any>) => {
                              const serverDate = resp.headers.get('Date');
                              this.today = new Date(serverDate);
                          });
  }
}


