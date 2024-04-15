import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumniData } from '../../../../shared/models/alumnos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrl: './nuevo-alumno.component.scss'
})
export class NuevoAlumnoComponent {


  constructor(
    private matDialogRef: MatDialogRef<NuevoAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) private editItem?: AlumniData
  ) {

    if (this.editItem) {
      this.newUserForm.patchValue(this.editItem);
    }
  }
  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$')]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]),
    course: new FormControl('', Validators.required)
  })
  get nameControl() {
    return this.newUserForm.get('name');
  }

  get lastNameControl() {
    return this.newUserForm.get('lastName');
  }

  get emailControl() {
    return this.newUserForm.get('email')
  }

  get courseControl() {
    return this.newUserForm.get('course');
  }

  onSave(): void {
    if (this.newUserForm.invalid) {
      this.newUserForm.markAllAsTouched();
    } else {
      Swal.fire({
        title: 'Guardado',
        text: 'El nuevo usuario fue creado con éxito',
        icon: 'success',
        confirmButtonColor: '#aeea00',
        confirmButtonText: 'Aceptar',
      }).then( result => {
        if (result.isConfirmed) {
          this.matDialogRef.close(this.newUserForm.value);
        }
      })
    }
  }
}
