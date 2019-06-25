import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-crew-overview',
  templateUrl: './crew-overview.component.html',
  styleUrls: ['./crew-overview.component.scss']
})
export class CrewOverviewComponent implements OnInit {
public crew: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() { 
    this.getCrewOverview();
  }
 
  getCrewOverview() {
    this.apiService.crewOverview().subscribe(
      response => {
      this.crew = response;
      },
      error => {});
  }
}
