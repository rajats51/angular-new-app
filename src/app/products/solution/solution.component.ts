import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component']
})
export class SolutionComponent implements OnInit {
  public details: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSolutionDetails();
  }
  getSolutionDetails() {

    this.apiService.solutionDetails().subscribe(
      response => {
        this.details = response;
      },
      error => {});
  }
}
