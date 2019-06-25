import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component']
})
export class PreHeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
