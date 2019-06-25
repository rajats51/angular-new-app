import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;
  displayOldPasswordIcon: boolean = false;
  displayPasswordIcon: boolean = false;
  displayConfirmPassword: boolean = false;
  obj: any = {};
  isSubmitted = false;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder,) {
    iconRegistry.addSvgIcon(
      'password_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/complete.svg'));
    iconRegistry.addSvgIcon(
      'password_notmatched',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/notstarted.svg'));
  }
;
  
  ngOnInit() {
    this.buildForm();
  }

  onSearchPassword(oldPassword) {
    
        if (oldPassword.length >= 8 && oldPassword.length <= 14) {
    
          this.displayOldPasswordIcon = true;
        }
        else {
          this.displayOldPasswordIcon = false;
        }
      }
  onSearchChange(searchValue) {
    
        if (searchValue.length >= 8 && searchValue.length <= 14) {
    
          this.displayPasswordIcon = true;
        }
        else {
          this.displayPasswordIcon = false;
        }
      }
    
      oncheckPassword(values) {
        if (values.length >= 8 && values.length <= 14) {
    
          if (this.obj.password === this.obj.confPassword) {
            this.displayConfirmPassword = true;
          }
    
        }
        else {
          this.displayConfirmPassword = false;
        }
      }
    
      // submitPassword(){
      //   
      //   if(this.obj.password===this.obj.confPassword){
      //     if(this.obj.password.length>=8 && this.obj.password.length <= 14)
      //     
      //   }
      // }

      submit() {
        this.isSubmitted = true;
      }
      getSubmitButtonLabel(){
        return this.isSubmitted?"Your password has been successfully changed!": 'SUBMIT';
      }

      buildForm() {
        
            this.changePasswordForm =  this.formBuilder.group ({
              oldPassword: ['', Validators.required],
              confirmPassword: ['', Validators.required],
              confirmNewPassword: ['', Validators.required]
             });
          }
}
