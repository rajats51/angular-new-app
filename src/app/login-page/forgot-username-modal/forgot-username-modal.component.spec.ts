import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotUsernameModalComponent } from './forgot-username-modal.component';

describe('ForgotUsernameModalComponent', () => {
  let component: ForgotUsernameModalComponent;
  let fixture: ComponentFixture<ForgotUsernameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotUsernameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotUsernameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
