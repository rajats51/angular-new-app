import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import {ModalMetadata} from '../../common/libraries/modal-utils';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-password-success-popup',
  templateUrl: './password-success-popup.component.html',
  styleUrls: ['./password-success-popup.component.scss']
})
export class PasswordSuccessPopupComponent implements OnInit {
  @ViewChild('passwordsuccesspopup')pwsPopup:ElementRef;
  steps: string[] = [
    'Email',
    'Phone',
    'Password'
  ];

  from:string = "welcome";
  message:string = "Success! Your new password has been set";

  constructor( public dialogRef: MatDialogRef<PasswordSuccessPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any, public router:Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'Fill-1',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/Fill-1.svg'));
    if(this.data.path==='reset')this.message="Success! Your Password Has Been Reset.";
  }

  ngOnInit() {

    var topPosition =  ModalMetadata.getPosition(this.pwsPopup.nativeElement.offsetHeight)+'px';
    this.dialogRef.updatePosition({top:topPosition});
  }

  landingPage(){
    this.dialogRef.close();
    this.router.navigateByUrl("/prospect/home");
  }

}


