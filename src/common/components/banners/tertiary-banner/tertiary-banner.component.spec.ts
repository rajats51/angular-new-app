import { async, ComponentFixture, TestBed               } from '@angular/core/testing';
import { TertiaryBannerComponent                        } from './tertiary-banner.component';
import { MatTabsModule, MatIconRegistry, MatIconModule  } from '@angular/material';
import { BrowserAnimationsModule                        } from '@angular/platform-browser/animations';

describe('TertiaryBannerComponent', () => {
  let component: TertiaryBannerComponent;
  let fixture: ComponentFixture<TertiaryBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTabsModule, MatIconModule, MatIconRegistry, BrowserAnimationsModule],
      declarations: [ TertiaryBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TertiaryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
