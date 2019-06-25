

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
//import { HttpClientModule }        from '@angular/common/http';
import { HeaderModule } from '../common/components/header/header.module';
import { SidenavMenuModule } from '../common/components/sidenav-menu/sidenav-menu.module';
import { FooterModule } from '../common/components/footer/footer.module';
import { MaterialModule } from '../material-module.module';
import { ProspectRoutingModule } from './prospect-routing.module';
import { ProspectComponent } from './prospect.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ProspectComponent],
  imports: [
    CommonModule,
    ProspectRoutingModule,
    MaterialModule,
    HeaderModule,
    SidenavMenuModule,
    FooterModule
  ]
})
export class ProspectModule { }
