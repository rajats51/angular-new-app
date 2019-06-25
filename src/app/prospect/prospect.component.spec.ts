import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderModule                  } from '../common/components/header/header.module';
import { FooterModule                 } from '../common/components/footer/footer.module';
import { BannersModule                    } from '../common/components/banners/banners.module';
import { ProspectComponent                } from './prospect.component';
import { ProspectRoutingModule            } from './prospect-routing.module';
import { SidenavMenuComponent             }  from '../common/components/sidenav-menu/sidenav-menu.component';

describe('ProspectComponent', () => {
  let component: ProspectComponent;
  let fixture: ComponentFixture<ProspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectComponent, SidenavMenuComponent ],
      imports:[BannersModule,ProspectRoutingModule,HeaderModule,FooterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
