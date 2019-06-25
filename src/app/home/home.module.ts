import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannersModule } from '../common/components/banners/banners.module';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { ActivityOverviewComponent } from './activity-overview/activity-overview.component';
import { CrewOverviewComponent } from './crew-overview/crew-overview.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddSolutionComponent,
    ActivityOverviewComponent,
    CrewOverviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    BannersModule
  ]
})
export class HomeModule { }
