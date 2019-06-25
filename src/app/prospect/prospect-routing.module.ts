import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectComponent } from './prospect.component';


const routes: Routes = [
  {
    path:'',
    component:ProspectComponent,
    children:[
 
              { path: 'solutions', loadChildren: '../products/products.module#ProductsModule'},
              { path: 'home', loadChildren: '../home/home.module#HomeModule' },
              { path: 'pagenotfound', loadChildren: '../page-not-found/page-not-found.module#PageNotFoundModule' },
              { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' }
            ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectRoutingModule { }
