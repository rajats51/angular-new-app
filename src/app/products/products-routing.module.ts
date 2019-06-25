import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CrewComponent } from './crew/crew.component';
import { ActivityComponent } from './activity/activity.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SolutionComponent } from './solution/solution.component';
import { TaskBoardComponent } from './task-board/task-board.component';

const routes: Routes = [
{
  path:'',component:ProductsComponent,
  children: [
    
    { path:'crew',  component: CrewComponent},
    { path:'activity',component: ActivityComponent},
    { path:'timeline',component: TimelineComponent},
    { path:'solution',component: SolutionComponent},
    { path:'my-tasks',component: TaskBoardComponent },
    { path:'',component: TaskBoardComponent }

   ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
