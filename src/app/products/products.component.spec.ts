import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent                } from './products.component';
import { MaterialModule                   } from '../material-module.module';
import { BrowserAnimationsModule          } from '@angular/platform-browser/animations';
import { TaskBoardComponent               } from './task-board/task-board.component'; 
import { TertiaryBannerComponent          } from '../common/components/banners/tertiary-banner/tertiary-banner.component';          
import { AvatarBannerComponent            } from '../common/components/banners/avatar-banner/avatar-banner.component';
import { HttpClientModule                 } from '@angular/common/http';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent,TaskBoardComponent,TertiaryBannerComponent,AvatarBannerComponent ],
      imports: [MaterialModule, BrowserAnimationsModule,HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
