import { NgModule }                from '@angular/core';
import { SolutionsCatalogComponent } from './solutions-catalog.component';
import { MaterialModule }          from '../material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule }            from '@angular/cdk/layout';

@NgModule({
  declarations: [SolutionsCatalogComponent],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
  ],
  exports: [SolutionsCatalogComponent]
})
export class SolutionsCatalogModule { }
