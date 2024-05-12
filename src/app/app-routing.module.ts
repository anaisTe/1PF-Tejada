import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './feature/layout/layout.component';
import { LoginComponent } from './feature/auth/login/login.component';

const AppRoutes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('../app/feature/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'inicio', 
    component: LayoutComponent,
    loadChildren: () => import('./feature/layout/views.module').then(m => m.ViewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
