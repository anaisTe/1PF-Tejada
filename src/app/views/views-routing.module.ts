import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { AlumnosComponent } from '../views/alumnos/alumnos.component';
import { CursosComponent } from '../views/cursos/cursos.component';
import { LayoutComponent } from './layout.component';

const ViewsRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      { path: '', component: AlumnosComponent },
      { path: 'inicio', component:HomeComponent },
      { path: 'cursos', component: CursosComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(ViewsRoutes)],
  exports: [RouterModule]
}) 
export class ViewsRoutingModule { }