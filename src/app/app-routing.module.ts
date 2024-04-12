import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './views/alumnos/alumnos.component';
import { CursosComponent } from './views/cursos/cursos.component';

const AppRoutes: Routes = [
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  {
    path: 'inicio', 
    loadChildren: () => import('./shared/shared-routing.module').then(m => m.SharedRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
