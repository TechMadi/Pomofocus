import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
path:"",
redirectTo:"",
pathMatch:"full"
  },{
    path:'',
    component:DefaultComponent,
    children :[
      {
        path:"",
        redirectTo:"auth",
        pathMatch:"full"
      },
      {
        path:"auth",
        loadChildren : ()=> import('./modules/auth/auth.module').then(m=> m.AuthModule)
      },
    ]
  },
  {
    path:"dashboard",
    loadChildren:()=> import('../app/modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
