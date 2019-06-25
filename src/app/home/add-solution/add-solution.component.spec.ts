import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionComponent } from './add-solution.component';

describe('SolutionsHubComponent', () => {
  let component:  AddSolutionComponent;
  let fixture: ComponentFixture< AddSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  AddSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( AddSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
