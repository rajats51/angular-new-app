import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsCatalogComponent } from './solutions-catalog.component';

describe('SolutionsCatalogComponent', () => {
  let component: SolutionsCatalogComponent;
  let fixture: ComponentFixture<SolutionsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
