import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../common/services/auth/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UtilityService } from '../common/services/date/utility.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ForgotUsernameModalComponent } from './forgot-username-modal/forgot-username-modal.component';
import { ModalMetadata } from '../common/libraries/modal-utils';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component']
})
export class LoginPageComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public loginForm: FormGroup;
  isModalOpen = false;
  titleAlert = 'this field is required';
  post: any = '';
  today: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private utilService: UtilityService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'username_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/username-icon.svg'));
    iconRegistry.addSvgIcon(
      'password_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/Password-icon.svg'));
  }

  ngOnInit() {
    // console.log('routes ', this.activateRoute.snapshot );
    this.buildForm();
    this.getServerDate();
  }

  getServerDate(): void {
    this.utilService.getServerDate()
      .subscribe((resp: HttpResponse<any>) => {
        const serverDate = resp.headers.get('Date');
        this.today = new Date(serverDate);
      });
  }

  logIn() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.authService.isAuthorized(this.loginForm.value.testName, this.loginForm.value.testPW)
        .subscribe((authResult) => {
          if (authResult) {
            this.router.navigateByUrl('/prospect/home');
          }
        });
    }
  }


  buildForm() {

    this.loginForm = this.formBuilder.group({
      testName: ['', Validators.required],
      testPW: ['', Validators.required]
    });
  }

  /*  we will use this again when creating the new person possibly
    setChangeValidate() {
      this.loginForm.get('validate').valueChanges.subscribe(
        (validate) => {
          if (validate === '1') {
            this.loginForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
            this.titleAlert = 'You need to specify at least 3 characters';
          } else {
            this.loginForm.get('name').setValidators(Validators.required);
          }
          this.loginForm.get('name').updateValueAndValidity();
        }
      );
    }
   */

  get name() {
    return this.loginForm.get('name') as FormControl;
  }
  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
  getErrorPassword() {
    return this.loginForm.get('password').hasError('required')
      ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.loginForm.get('password').hasError('requirements') ?
        'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }
  onSubmit(post) {
    this.post = post;
  }
  checkValidation(event: any) {
    // console.log('form is ', this.loginForm);
  }
  forgotUsernameModal() {
    this.isModalOpen = true;
    const dialogConfig = ModalMetadata.getDialogConfig();
    dialogConfig.panelClass = 'cpo-modal';
    dialogConfig.width = '800';
    const dialogRef = this.dialog.open(ForgotUsernameModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { }, error => { }, () => { this.isModalOpen = false; });
  }
}
