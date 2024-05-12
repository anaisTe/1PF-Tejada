import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CursosComponent } from './cursos/cursos.component';

const ViewsRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alumnos', component: AlumnosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ViewsRoutes)],
  exports: [RouterModule]
}) 
export class ViewsRoutingModule { }