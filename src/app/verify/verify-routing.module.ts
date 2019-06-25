import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyComponent } from './verify.component';
import { EmailComponent} from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:VerifyComponent,
    children:[
 
              { path: 'email/:from', component:EmailComponent},
              { path: 'phone/:from', component: PhoneComponent},
              { path: 'user/:from', component: UserComponent },
              { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
            ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyRoutingModule { }
