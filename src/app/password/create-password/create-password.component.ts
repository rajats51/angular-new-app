import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatDialogConfig, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PasswordSuccessPopupComponent } from '../password-success-popup/password-success-popup.component';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';
import {ModalMetadata} from '../../common/libraries/modal-utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component']
})
export class CreatePasswordComponent implements OnInit {
  public passwordForm: FormGroup;
  
  steps: string[] = [
    'Email Verification',
    'Phone Verification',
    'Password'
  ];
  displayPasswordIcon = false;
  displayConfirmPassword = false;
  obj: any = {};
  public from = 'reset';
  public message = 'Welcome to your Solution Hub';

  constructor(public dialog: MatDialog,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
    iconRegistry.addSvgIcon(
      'password_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/complete.svg'));
    iconRegistry.addSvgIcon(
      'password_notmatched',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/notstarted.svg'));
  }


  ngOnInit() {
    this.buildForm();
    this.from = this.route.snapshot.paramMap.get('from');
    if (this.from === 'reset') { this.message = 'Password Reset'; }
    if (this.from !== 'welcome' && this.from !== 'reset') { this.router.navigateByUrl('/pagenotfound'); }
  }

  onSearchChange(searchValue) {
    if (searchValue.length >= 8 && searchValue.length <= 14) {
      this.displayPasswordIcon = true;
    } else {
      this.displayPasswordIcon = false;
    }
  }

  oncheckPassword(values) {
    if (values.length >= 8 && values.length <= 14) {

      if (this.obj.password === this.obj.confPassword) {
        this.displayConfirmPassword = true;
      }

    } else {
      this.displayConfirmPassword = false;
    }
  }

  submitPassword() {
    // if(this.obj.password===this.obj.confPassword){
    //   if(this.obj.password.length>=8 && this.obj.password.length <= 14)
    // }

    this.successModal();
  }

  successModal() {

    const dialogConfig = ModalMetadata.getDialogConfig();
    dialogConfig.panelClass = 'cpo-modal';
    dialogConfig.disableClose = true;
    dialogConfig.data = { path: this.from };
    this.dialog.open(PasswordSuccessPopupComponent, dialogConfig);
  }
  
  buildForm() {
    
        this.passwordForm =  this.formBuilder.group ({
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
         });
      }   
}
