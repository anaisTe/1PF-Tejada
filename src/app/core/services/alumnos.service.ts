import { Injectable } from '@angular/core';
import { AlumniData } from '../../shared/models/alumnos.model';
import { Observable, of } from 'rxjs';

  const estudiantesBD: AlumniData[] = [
    {id: 1, lastName: 'test', name: 'kika', email: 'kika@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 2, lastName: 'test', name: 'lulu', email: 'lulu@mail.com', course: 'DISEÑO', createdAt: new Date(),},
    {id: 3, lastName: 'test', name: 'mailo', email: 'mailo@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 4, lastName: 'test', name: 'nena', email: 'nena@mail.com', course: 'ANGULAR', createdAt: new Date(),},
  ];

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  getAlumnos(): Observable<AlumniData[]> {
    return of(estudiantesBD)
  }

}
