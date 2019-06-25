import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module.module';
import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { UserComponent } from './user/user.component';
import { FooterModule } from '../common/components/footer/footer.module';
import { HeaderModule } from '../common/components/header/header.module';
import { ProgressbarModule } from '../common/components/progressbar/progressbar.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyComponent, PhoneComponent, EmailComponent, UserComponent],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    VerifyRoutingModule,
    FooterModule,
    HeaderModule,
    ProgressbarModule,
    ReactiveFormsModule
  ]
})
export class VerifyModule { }
