import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public activity: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSolutionActivity();
  }

  getSolutionActivity() {
    this.apiService.solutionActivity().subscribe(
      response => {
        this.activity = response;
      },
      error => {});
  }
}
