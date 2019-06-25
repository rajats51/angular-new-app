import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.scss']
})
export class ActivityOverviewComponent implements OnInit {
  public activity: any;

  constructor(private apiService: ApiService) {

   }

  ngOnInit()
  {
    this.getActivityOverview();
  }


 getActivityOverview() {
    this.apiService.activityOverview().subscribe(
      response => {
      this.activity = response;
      },
      error => { });
  }

}
