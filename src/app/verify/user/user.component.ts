import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ApiService } from '../../common/services/api-service/api.service';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup;
  steps: string[] = [
    'EMAIL <span class="sm-hide">VERIFICATION</span>',
    'PHONE <span class="sm-hide">VERIFICATION</span>',
    'PASSWORD'
  ];

  public from:string = "welcome";
  header_text:string ="Welcome to <span class=\"nowrap\">your Solution Hub</span>";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();
 
  // getErrorMessage() {
  //   return this.emailFormControl.hasError('required') ? 'You must enter a value' :
  //       this.emailFormControl.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.router.urlUpdateStrategy = 'eager';
    this.router.onSameUrlNavigation = 'ignore';
    iconRegistry.addSvgIcon(
      'username_match',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/username-icon.svg'));
    }

  ngOnInit() {
    this.buildForm();
    this.from = this.route.snapshot.paramMap.get('from');
    if(this.from ==='reset')this.header_text="Password Reset - User name Entry"
    else if(this.from!="welcome" &&  this.from!='reset')this.router.navigateByUrl("/pagenotfound");
  }

  verifyuser() {
    this.apiService.verifyUser(this.userForm.value.testemail)
      .subscribe((userResponse) => {
        if (userResponse) {
          let url = '/verify/email/' + this.from;
          if (this.from === 'reset') {
            url = "/verify/phone/" + this.from;
          }
          this.router.navigateByUrl(url);
        }
      });
  }

  buildForm() {

    this.userForm = this.formBuilder.group({
      testemail: this.emailFormControl
    });
  }
}
