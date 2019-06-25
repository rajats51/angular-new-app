import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule                    } from '@angular/material';
import { SecondaryBannerComponent         } from './secondary-banner.component';
import { BrowserAnimationsModule          } from '@angular/platform-browser/animations';


describe('SecondaryBannerComponent', () => {
  let component: SecondaryBannerComponent;
  let fixture: ComponentFixture<SecondaryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ SecondaryBannerComponent],
      imports: [MatTabsModule, BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
