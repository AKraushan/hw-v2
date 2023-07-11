import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  
  { path:'login',component:LoginComponent, },
  
  {
    path:'admin',component:MainComponent,
    
    canActivate:[AuthGuard,RoleGuard],
    data:{
      expectedRole:['Admin']
    },
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule),

  },
  {
    path:'student',component:MainComponent,
    
    canActivate:[AuthGuard,RoleGuard],
    data:{
      expectedRole:['Student','Admin']
    },
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule),

  },
  { path:'', component:LoginComponent, pathMatch: 'full' },
  {path:'**',component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
