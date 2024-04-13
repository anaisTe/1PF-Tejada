import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  {
    path: '', redirectTo: 'alumnos', pathMatch: 'full'
  },
  {
    path: 'alumnos', 
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
