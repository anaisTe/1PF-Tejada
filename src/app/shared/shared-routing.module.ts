import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from '../views/home/home.component';
import { AlumnosComponent } from '../views/alumnos/alumnos.component';
import { CursosComponent } from '../views/cursos/cursos.component';

const SharedRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
      { path: '', component:HomeComponent },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'cursos', component: CursosComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(SharedRoutes)],
  exports: [RouterModule]
}) 
export class SharedRoutingModule { }