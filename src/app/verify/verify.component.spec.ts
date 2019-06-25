import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyRoutingModule } from './verify-routing.module';
import { PreFooterComponent } from '../common/components/footer/pre-footer/pre-footer.component';
import { PreHeaderComponent } from '../common/components/header/pre-header/pre-header.component';
import { VerifyComponent } from './verify.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { UserComponent } from './user/user.component';


describe('VerifyComponent', () => {
  let component: VerifyComponent;
  let fixture: ComponentFixture<VerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyComponent,PreHeaderComponent, PreFooterComponent,PhoneComponent,EmailComponent,UserComponent ],
      imports:[VerifyRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
