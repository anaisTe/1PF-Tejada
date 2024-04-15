import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumniData } from '../../shared/models/alumnos.model';
import { MatDialog } from '@angular/material/dialog';
import { NuevoAlumnoComponent } from './dialog/nuevo-alumno/nuevo-alumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {
  estudiantes: AlumniData[] = [
    {id: 1, lastName: 'Test1', name: 'User 1', email: 'userN@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 2, lastName: 'Test2', name: 'User 2', email: 'userN@mail.com', course: 'DISEÑO', createdAt: new Date(),},
    {id: 3, lastName: 'Test3', name: 'User 3', email: 'userN@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 4, lastName: 'Test4', name: 'User 4', email: 'userN@mail.com', course: 'ANGULAR', createdAt: new Date(),},
  ];

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'course', 'createdAt', 'action'];
  dataSource = new MatTableDataSource<AlumniData>(this.estudiantes);
  
  constructor(public newUserDialogRef: MatDialog) {}

  newUserDialog(): void {
    this.newUserDialogRef.open( NuevoAlumnoComponent)
    .afterClosed()
    .subscribe({
      next: (result): void => {
        if(result) {
          
          result.id = this.estudiantes.map( ele => ele.id + 1).pop();

          result.createdAt = new Date();
          
          this.estudiantes = [...this.estudiantes, result]
          
        }
      },
    })
  }

}

