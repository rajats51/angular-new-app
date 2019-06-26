import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionTabsComponent } from './solution-tabs.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material-module.module';
import { TaskBoardComponent } from '../task-board/task-board.component';
import { CrewComponent } from '../crew/crew.component';
import { ActivityComponent } from '../activity/activity.component';
import { DetailComponent } from '../detail/detail.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { SolutionComponent } from '../solution/solution.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpoTaskCardModule } from "..//common/components/cpo-task-card/cpo-task-card.module";

@NgModule({
  declarations: [SolutionTabsComponent,
    TaskBoardComponent,
    SolutionComponent,
    CrewComponent, ActivityComponent, DetailComponent, TimelineComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CpoTaskCardModule
  ],
  exports: [
    SolutionTabsComponent
  ]
})
export class SolutionTabsModule { }
