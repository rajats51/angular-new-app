import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent implements OnInit {
  title = 'cpo-web-ui';
  public currentURL: string;
  public isLoggedIn: boolean = true;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.currentURL = this.location.path();
    // console.log('path is ', this.location.path());
    // console.log('routes ', this.activateRoute.snapshot );
  }
}
