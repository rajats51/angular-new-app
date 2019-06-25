import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from '../../common/services/api-service/api.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component']
})
export class PhoneComponent implements OnInit {

  MAX_PIN_LENGTH = 6;

  steps: string[] = [
    'EMAIL <span class="sm-hide">VERIFICATION</span>',
    'PHONE <span class="sm-hide">VERIFICATION</span>',
    'PASSWORD'
  ];

  @ViewChild('pin') pinElement: ElementRef;
  public isPinFocused: boolean;
  public pinForm: FormGroup;

  public from: String = 'welcome';
  header_text: String = 'Welcome to <span class="nowrap">your Solution Hub';

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private apiService: ApiService) {
    this.router.urlUpdateStrategy = 'eager';
    this.router.onSameUrlNavigation = 'ignore';
  }

  ngOnInit() {
    this.buildForm();
    this.from = this.route.snapshot.paramMap.get('from');
    if (this.from === 'reset') {
      this.header_text = 'Password Reset - Verify Phone';
    } else if (this.from !== 'welcome' && this.from !== 'reset') {
      this.router.navigateByUrl('/pagenotfound');
    }
  }

  buildForm() {
    this.pinForm = this.formBuilder.group({
      pin: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/\d/g)
      ]),
      pinDigits: new FormArray([
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null),
        new FormControl(null)
      ])
    });
  }

  get pin() { return this.pinForm.get('pin'); }
  get pinDigits() { return this.pinForm.get('pinDigits') as FormArray; }

  focusPinElement() {
    this.pinElement.nativeElement.focus();
  }

  getIsActivePinDigit(i: number) {
    return (i === this.pin.value.length || i === this.MAX_PIN_LENGTH - 1 && this.pin.value.length === this.MAX_PIN_LENGTH)
      && this.isPinFocused;
  }

  splitPin() {
    const pinArray = Array.from(this.pin.value);

    Object.keys(this.pinDigits.controls).forEach((key, index) =>
      this.pinDigits.controls[key].setValue(pinArray[index] || '')
    );
  }

  verifyPin() {
    this.apiService.verifyPhone(this.pin.value)
      .subscribe((phoneResponse) => {
        if (phoneResponse) {
          this.router.navigateByUrl('/createpassword/' + this.from);
        }
      });
  }
}
