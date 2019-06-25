import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarBannerComponent } from './avatar-banner.component';

describe('AvatarBannerComponent', () => {
  let component: AvatarBannerComponent;
  let fixture: ComponentFixture<AvatarBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
