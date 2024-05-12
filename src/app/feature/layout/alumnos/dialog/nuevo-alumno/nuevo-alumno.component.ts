import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumniData, IAlumnosDialog } from '../../../../../core/models/alumnos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrl: './nuevo-alumno.component.scss'
})
export class NuevoAlumnoComponent {

  formValues: AlumniData[] = [];

  constructor(
    private matDialogRef: MatDialogRef<NuevoAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: IAlumnosDialog,
  ) {
    matDialogRef.disableClose = true;

    if (this.data?.dataForm) {
      this.newUserForm.patchValue(this.data.dataForm);
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
  
      this.matDialogRef.close(this.newUserForm.value);

      Swal.fire({
        title: 'Guardado',
        icon: 'success',
        confirmButtonColor: '#aeea00',
        confirmButtonText: 'Aceptar',
      }).then( (result) => {
        if(result.isConfirmed) {
          window.location.reload();
        }
      })
    } 
  }
}
