import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SolutionTabsComponent } from './solution-tabs.component';

describe('SolutionTabsComponent', () => {
  let component: SolutionTabsComponent;
  let fixture: ComponentFixture<SolutionTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
