import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-tertiary-banner',
  templateUrl: './tertiary-banner.component.html',
  styleUrls: ['./tertiary-banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TertiaryBannerComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'keyboard_arrow_down',
          sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/keyboard_arrow_down.svg'));
  }
  ngOnInit() {

  }

}
