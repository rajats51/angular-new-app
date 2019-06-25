import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VerifyModule } from './verify/verify.module';
import { MaterialModule } from './material-module.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { PopupModal2Component } from './popup-dialog/popup-modal2/popup-modal2.component';
import { PopupModalComponent } from './popup-dialog/popup-modal/popup-modal.component';
import { ProspectModule } from './prospect/prospect.module';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { SolutionsCatalogModule } from './solutions-catalog/solutions-catalog.module';
import { SolutionTabsModule } from './products/solution-tabs/solution-tabs.module';
import { UtilityService } from './common/services/date/utility.service';
import { ApiService } from './common/services/api-service/api.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProgressbarModule } from './common/components/progressbar/progressbar.module';
import { HeaderModule } from './common/components/header/header.module';
import { FooterModule } from './common/components/footer/footer.module';
import { PasswordModule } from './password/password.module';
import { ForgotUsernameModalComponent } from './login-page/forgot-username-modal/forgot-username-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupModalComponent,
    PopupDialogComponent,
    PopupModal2Component,
    LoginPageComponent,
    ForgotUsernameModalComponent
  ],

  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SolutionsCatalogModule,
    SettingsPageModule,
    ProspectModule,
    PageNotFoundModule,
    MatDialogModule,
    SolutionTabsModule,
    VerifyModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule,
    HeaderModule,
    FooterModule,
    PasswordModule
  ],
  providers: [UtilityService, ApiService],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupModalComponent,
    PopupModal2Component,
    ForgotUsernameModalComponent
  ]
})
export class AppModule { }
