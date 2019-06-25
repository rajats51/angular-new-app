import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Alex Mulder';
  pushRightClass = 'push-right';
  activeBurgerClass = 'is-active';
  iconSrc:string ="assets/icons/Menu_On.svg";
  menuIsOpen:boolean=false;


  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    const burger: any = document.querySelector('.hamburger');
    dom.classList.toggle(this.pushRightClass);
    burger.classList.toggle(this.activeBurgerClass);
    this.menuIsOpen = !this.menuIsOpen;
    this.iconSrc=this.menuIsOpen?"assets/icons/Close_On.svg":"assets/icons/Menu_On.svg";
  }

  headerToggle() {
    if (this.isToggled()) {
      this.toggleSidebar();
    }
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

}
