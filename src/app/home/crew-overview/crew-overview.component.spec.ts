import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewOverviewComponent } from './crew-overview.component';

describe('CrewOverviewComponent', () => {
  let component: CrewOverviewComponent;
  let fixture: ComponentFixture<CrewOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
