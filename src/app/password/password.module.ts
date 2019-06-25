import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module.module';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule }        from '../common/components/header/header.module';
import { ProgressbarModule } from '../common/components/progressbar/progressbar.module';
import { FooterModule } from './../common/components/footer/footer.module';
import { AuthenticationCodeComponent } from './authentication-code/authentication-code.component';
import { PasswordSuccessPopupComponent } from './password-success-popup/password-success-popup.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BannersModule } from '../common/components/banners/banners.module';
import {HomeModule} from '../home/home.module';

@NgModule({
  declarations: [
    AuthenticationCodeComponent,
    PasswordSuccessPopupComponent,
    CreatePasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule,
    HeaderModule,
    FooterModule,
    BannersModule,
    HomeModule
  ],
  entryComponents: [PasswordSuccessPopupComponent]
})
export class PasswordModule { }
