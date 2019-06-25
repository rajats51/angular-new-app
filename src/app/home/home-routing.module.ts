import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { CrewOverviewComponent } from './crew-overview/crew-overview.component';
import { ActivityOverviewComponent } from './activity-overview/activity-overview.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  children: [
    
    { path:'crew',  component: CrewOverviewComponent},
    { path:'activity',component: ActivityOverviewComponent},
    { path:'app-solution',component: AddSolutionComponent},
    { path:'',component: AddSolutionComponent}

   ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
