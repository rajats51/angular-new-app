import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SolutionsCatalogComponent } from './solutions-catalog/solutions-catalog.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ProspectComponent } from './prospect/prospect.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import {CreatePasswordComponent} from './password/create-password/create-password.component';
import {ChangePasswordComponent} from './password/change-password/change-password.component';

const routes: Routes = [
  { path: 'prospect',          loadChildren: './prospect/prospect.module#ProspectModule' },
  { path: 'solutions-catalog', component: SolutionsCatalogComponent },
  { path: 'settings',          component: SettingsPageComponent },
  { path: 'popup',             component: PopupDialogComponent },
  { path: 'createpassword/:from',    component: CreatePasswordComponent},
  { path: 'changepassword',    component: ChangePasswordComponent },
  // { path: 'password',          loadChildren: './password/password.module#PasswordModule' },
  { path: 'verify',            loadChildren: './verify/verify.module#VerifyModule' },
  { path: '',                  component: LoginPageComponent },
  { path: '**',                redirectTo: '/pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: []
})
export class AppRoutingModule { }
