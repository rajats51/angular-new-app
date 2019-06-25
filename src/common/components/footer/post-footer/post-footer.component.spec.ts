import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFooterComponent } from './post-footer.component';
import {HttpClientModule} from '@angular/common/http';
import {UtilityService} from '../../../services/date/utility.service';

describe('PostFooterComponent', () => {
  let component: PostFooterComponent;
  let fixture: ComponentFixture<PostFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFooterComponent],
      imports: [HttpClientModule],
      providers: [UtilityService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
