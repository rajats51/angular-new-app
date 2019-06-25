import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { BannersModule } from '../common/components/banners/banners.module';

import { SolutionTabsModule } from './solution-tabs/solution-tabs.module';

@NgModule({
  declarations: [ProductsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    BannersModule,
    SolutionTabsModule,
  ],
  /* exports: [
     CrewComponent,
     TimelineComponent,
     DetailComponent,
     SolutionComponent,
     ActivityComponent,
   ],*/
})
export class ProductsModule { }
