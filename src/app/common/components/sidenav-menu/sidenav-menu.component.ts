import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  pushRightClass = 'push-right';
  activeBurgerClass = 'is-active';
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    const burger: any = document.querySelector('.hamburger');
    dom.classList.toggle(this.pushRightClass);
    burger.classList.toggle(this.activeBurgerClass);
  }
}