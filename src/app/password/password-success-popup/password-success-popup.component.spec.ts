import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSuccessPopupComponent } from './password-success-popup.component';

describe('PasswordSuccessPopupComponent', () => {
  let component: PasswordSuccessPopupComponent;
  let fixture: ComponentFixture<PasswordSuccessPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordSuccessPopupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
