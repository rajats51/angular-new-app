import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {ModalMetadata} from '../../common/libraries/modal-utils';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-forgot-username-modal',
  templateUrl: './forgot-username-modal.component.html',
  styleUrls: ['./forgot-username-modal.component.scss']
})
export class ForgotUsernameModalComponent implements OnInit {

  @ViewChild('forgotusernamecontent')funPopup:ElementRef;

  constructor(
    public dialogRef: MatDialogRef<ForgotUsernameModalComponent>,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) { 
    iconRegistry.addSvgIcon(
    'Fill-1',
    sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/Fill-1.svg'));
   }
  
  ngOnInit() {
    var topPosition =  ModalMetadata.getPosition(this.funPopup.nativeElement.offsetHeight)+'px';
    this.dialogRef.updatePosition({top:topPosition});
  }
  onContinueClick(): void {
    this.dialogRef.close();
  }
}
