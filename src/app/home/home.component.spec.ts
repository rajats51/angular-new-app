import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondaryBannerComponent         } from '../common/components/banners/secondary-banner/secondary-banner.component';
import { MaterialModule                   } from '../material-module.module';
import { BrowserAnimationsModule          } from '@angular/platform-browser/animations';
import { HomeComponent                 } from './home.component';
import { AvatarBannerComponent            } from '../common/components/banners/avatar-banner/avatar-banner.component';
import { AddSolutionComponent            } from './add-solution/add-solution.component';
import { RouterTestingModule              } from '@angular/router/testing';

describe('LandingComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SecondaryBannerComponent, AvatarBannerComponent,AddSolutionComponent],
      imports: [RouterTestingModule,MaterialModule, BrowserAnimationsModule],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
