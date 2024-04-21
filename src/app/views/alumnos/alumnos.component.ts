import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumniData } from '../../shared/models/alumnos.model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from './dialog/nuevo-alumno/nuevo-alumno.component';
import Swal from 'sweetalert2';
import { take } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  estudiantes: AlumniData[] = [
    {id: 1, lastName: 'test', name: 'kika', email: 'kika@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 2, lastName: 'test', name: 'lulu', email: 'lulu@mail.com', course: 'DISEÑO', createdAt: new Date(),},
    {id: 3, lastName: 'test', name: 'mailo', email: 'mailo@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 4, lastName: 'test', name: 'nena', email: 'nena@mail.com', course: 'ANGULAR', createdAt: new Date(),},
  ];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'course', 'createdAt', 'action'];
  dataSource = new MatTableDataSource<AlumniData>(this.estudiantes);
  
  constructor(
    public alumnoDialog: MatDialog
  ) {}

  newUserDialog() {
    this.alumnoDialog.open(NuevoAlumnoComponent, {
      data: {
        dialogHeader: 'Nuevo alumno',
        cancelButtonLabel: 'Cancelar', 
        confirmButtonLabel: 'Guardar'
      }
    }).afterClosed().pipe(take(1)).subscribe({
        next: (value) => {
          value.id = this.estudiantes.map(ele => ele.id + 1 ).pop()
    
          value.createdAt = new Date();
            
          this.estudiantes = [...this.estudiantes, value]
        }
      })
  }

  editUserDialog(editingUser: AlumniData) {
    this.alumnoDialog.open(NuevoAlumnoComponent, {
      data: {
        dialogHeader: 'Editar alumno',
        cancelButtonLabel: 'Cancelar', 
        confirmButtonLabel: 'Actualizar',
        dataForm: editingUser
      }
    }).afterClosed().subscribe({
    next: (res) => {
        if(editingUser) {
          this.estudiantes = this.estudiantes.map( ele =>
            ele.id === editingUser.id ? { ...ele, ...res } : ele
          );
        }
      }
    });
  }

  onDeleteUser(id: number): void {
    const dato = this.estudiantes.filter(ele => ele.id === id ).map(ele => ele.name);
    Swal.fire({
      title: '¿Está seguro?',
      text: `El usuario ${dato} será eliminado`,
      icon: 'warning',
      confirmButtonColor: '#ffffff',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#212121'
    }).then((result) => {
      console.log('ress', result);
      
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "El usuario fue eliminado",
          icon: "success",
          confirmButtonColor: '#aeea00',
          confirmButtonText: 'Aceptar',
        });
        
        this.estudiantes = this.estudiantes.filter( ele => ele.id != id);
      }
    })
  }

}