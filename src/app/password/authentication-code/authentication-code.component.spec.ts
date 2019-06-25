import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationCodeComponent } from './authentication-code.component';
import { FooterModule } from '../../common/components/footer/footer.module';

describe('AuthenticationCodeComponent', () => {
  let component: AuthenticationCodeComponent;
  let fixture: ComponentFixture<AuthenticationCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationCodeComponent ],
      imports:[FooterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
