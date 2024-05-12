import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlumniData } from '../../../shared/models/alumnos.model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from './dialog/nuevo-alumno/nuevo-alumno.component';
import Swal from 'sweetalert2';
import { Subscription, take } from 'rxjs';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'course', 'createdAt', 'action'];
  // estudiantes: AlumniData[] = [];
  estudiantes = new MatTableDataSource<AlumniData>([]);;

  alumniBd!: Subscription;

  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public alumnoDialog: MatDialog,
    private _AlumnoService: AlumnosService
  ) { }

  ngOnInit(): void {

    this.alumniBd = this._AlumnoService.getAlumnos()
    .subscribe({
      next: (value: AlumniData[]) => {
        this.estudiantes.data = value;
      },
      error: (err) => {
        console.warn(err);
        Swal.fire({
          title: 'Ocurrio un error',
          icon: 'error',
          confirmButtonColor: '#aeea00',
          confirmButtonText: 'Cerrar',
        });
      }
    })

  }

  ngAfterViewInit() {
    this.estudiantes.paginator = this.paginator;
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
          value.id = Math.floor(Math.random() * 10000).toString()
          
          value.createdAt = new Date();
      
          this._AlumnoService.postAlumnos(value).subscribe();

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
        res.id = editingUser.id;
        res.createdAt = editingUser.createdAt;

        this._AlumnoService.editAlumno(res).subscribe();
        }
      });
  }

  onDeleteUser(id: number): void {
    const dato = this.estudiantes.data.filter(ele => ele.id === id ).map(ele => ele.name);
    
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
        
        this._AlumnoService.deleteAlumno(id).subscribe();

        setTimeout( () => {
          window.location.reload();
        }, 2000)
      }
    })
  }

  ngOnDestroy(): void {
    this.alumniBd.unsubscribe();
  }
}