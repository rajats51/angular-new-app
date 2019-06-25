/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupModal2Component } from './popup-modal2.component';

describe('PopupModal2Component', () => {
  let component: PopupModal2Component;
  let fixture: ComponentFixture<PopupModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
