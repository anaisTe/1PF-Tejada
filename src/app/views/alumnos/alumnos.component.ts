import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface AlumniData {
  name: string;
  lastName: string;
  course: string;
  status: string;
  action: any;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  setTagColor(color: string) {
    switch(color) {
      case 'Aprobado':
        return 'color-green';
      default:
        return 'color-red';
    }
  }

  displayedColumns: string[] = ['name', 'lastName', 'course', 'status', 'action'];
  dataSource = new MatTableDataSource<AlumniData>(Estudiantes);
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
const Estudiantes: AlumniData[] = [
  {lastName: 'Test1', name: 'User 1', course: 'Google Ads', status: 'Aprobado', action: ''},
  {lastName: 'Test2', name: 'User 2', course: 'Desarrollo web', status: 'Desaprobado', action: ''},
  {lastName: 'Test3', name: 'User 3', course: 'Angular', status: 'Desaprobado', action: ''},
  {lastName: 'Test4', name: 'User 4', course: 'Diseño UX/UI', status: 'Aprobado', action: ''},
  {lastName: 'Test5', name: 'User 5', course: 'React js', status: 'Aprobado', action: ''},
  {lastName: 'Test6', name: 'User 6', course: 'Desarrollo web', status: 'Desaprobado', action: ''},
  {lastName: 'Test7', name: 'User 7', course: 'Google Ads', status: 'Aprobado', action: ''},
  {lastName: 'Test8', name: 'User 8', course: 'Desarrollo web', status: 'Aprobado', action: ''},
  {lastName: 'Test9', name: 'User 9', course: 'Angular', status: 'Desaprobado', action: ''},
  {lastName: 'Test10', name: 'User 10', course: 'Diseño UX/UI', status: 'Aprobado', action: ''},
  {lastName: 'Test11', name: 'User 11', course: 'React js', status: 'Desaprobado', action: ''},
  {lastName: 'Test12', name: 'User 12', course: 'Desarrollo web', status: 'Aprobado', action: ''},
];
