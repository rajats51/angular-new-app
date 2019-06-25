import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material';
import { CpoTaskCardComponent } from './cpo-task-card.component';
import { MaterialModule } from '../../../material-module.module';

describe('CpoTaskCardComponent', () => {
  let component: CpoTaskCardComponent;
  let fixture: ComponentFixture<CpoTaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpoTaskCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpoTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
