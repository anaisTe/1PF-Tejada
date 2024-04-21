import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlumniData } from '../../shared/models/alumnos.model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from './dialog/nuevo-alumno/nuevo-alumno.component';
import Swal from 'sweetalert2';
import { Subscription, take } from 'rxjs';
import { AlumnosService } from '../../core/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'course', 'createdAt', 'action'];
  estudiantes: AlumniData[] = [];

  alumniBd!: Subscription;

  constructor(
    public alumnoDialog: MatDialog,
    private _getAlumnoService: AlumnosService
  ) { }

  ngOnInit(): void {
    
    this.getDatos();

  }

  getDatos() {
    this.alumniBd = this._getAlumnoService.getAlumnos()
    .subscribe({
      next: (value: AlumniData[]) => {
        this.estudiantes = value;
      },
    })
  }

  newUserDialog() {
    this.alumniBd = this.alumnoDialog.open(NuevoAlumnoComponent, {
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
    this.alumniBd = this.alumnoDialog.open(NuevoAlumnoComponent, {
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
      text: `El usuario ${ dato } será eliminado`,
      icon: 'warning',
      confirmButtonColor: '#ffffff',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#212121'
    }).then((result) => {
      
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          icon: "success",
          confirmButtonColor: '#aeea00',
          confirmButtonText: 'Aceptar',
        });
        
        this.estudiantes = this.estudiantes.filter( ele => ele.id != id);
      }
    })
  }

  ngOnDestroy(): void {
    this.alumniBd.unsubscribe();
  }
}