import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
 public timeline: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSolutionTimeline();
  }
 getSolutionTimeline() {
  this.apiService.solutionTimeline().subscribe(
    response => {
      this.timeline = response;
    },
    error => { });
}
 }

