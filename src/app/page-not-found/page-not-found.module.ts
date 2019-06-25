import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { PageNotFoundComponent }  from './page-not-found.component';
import { HeaderModule }        from '../common/components/header/header.module';
import { SidenavMenuModule }   from '../common/components/sidenav-menu/sidenav-menu.module';
import { FooterModule }        from '../common/components/footer/footer.module';
import { RouterModule }       from '@angular/router';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
      CommonModule,
      SidenavMenuModule,
      FooterModule,
      HeaderModule,
      RouterModule,
      PageNotFoundRoutingModule
      ]
  })
  export class PageNotFoundModule { }