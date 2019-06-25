import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpoTaskCardComponent } from './cpo-task-card.component';
import {MaterialModule} from '../../../material-module.module';

@NgModule({
  declarations: [
    CpoTaskCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CpoTaskCardComponent],
})
export class CpoTaskCardModule { }
