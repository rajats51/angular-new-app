import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/services/api-service/api.service'

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {
  public crew: any;
  
  items =[
    {
      "image": "../assets/icons/CrewAvatar1.svg",
      "image_id": "CrewAvatar1.svg",
      "subImage": "../assets/icons/orange-crew.svg",
      "name": "Susan Matthews",
      "role": "Regional Manager"
    },
    {
      "image": "../assets/icons/CrewAvatar2.svg",
      "image_id": "CrewAvatar2.svg",
      "subImage": "../assets/icons/blue-crew.svg",
      "name": "Jimmy James",
      "role": "TMO"
    },
    {
      "image": "../assets/icons/CrewAvatar5.svg",
      "image_id": "CrewAvatar5.svg",
      "subImage": "",
      "name": "Lauren Peterson ",
      "role": "I.T. Support  "
    },
    {
      "image": "../assets/icons/CrewAvatar3.svg",
      "image_id": "CrewAvatar3.svg",
      "subImage": "",
      "name": "Extravaganza Petersonae",
      "role": "Controller at ABC Company"
    }
    
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSolutionCrew();
  }

  getSolutionCrew() {
    this.apiService.solutionCrew().subscribe(
      response => {
        this.crew = response;
      },
      error => {});
      }
  }
