import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../../../services/date/utility.service';
import {HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {

  constructor(private utilService: UtilityService) {}
  today: Date = new Date();

  ngOnInit() {
    this.getServerDate();
    // console.log("init");
  }
  getServerDate(): void {
    this.utilService.getServerDate()
                          .subscribe((resp: HttpResponse<any>) => {
                              const serverDate = resp.headers.get('Date');
                              this.today = new Date(serverDate);
                          });
  }

}
