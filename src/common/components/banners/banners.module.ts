import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../material-module.module';
import { AvatarBannerComponent } from './avatar-banner/avatar-banner.component';
import { SecondaryBannerComponent } from './secondary-banner/secondary-banner.component';
import { TertiaryBannerComponent } from './tertiary-banner/tertiary-banner.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [AvatarBannerComponent,
    SecondaryBannerComponent,
    TertiaryBannerComponent,
    ],
  imports: [
    MaterialModule,
    RouterModule   
  ],
  exports:[AvatarBannerComponent,SecondaryBannerComponent,TertiaryBannerComponent]
})
export class BannersModule { }
