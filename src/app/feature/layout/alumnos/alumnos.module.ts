import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoAlumnoComponent } from './dialog/nuevo-alumno/nuevo-alumno.component';
import { SharedModule } from '../../../shared/shared.module';
import { AlumnosComponent } from './alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlumnosComponent,
    NuevoAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }
