import { Injectable } from '@angular/core';
import { AlumniData } from '../../shared/models/alumnos.model';
import { Observable, of } from 'rxjs';

  const estudiantesBD: AlumniData[] = [
    {id: 10345, lastName: 'test', name: 'kika', email: 'kika@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10346, lastName: 'test', name: 'lulu', email: 'lulu@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10346, lastName: 'test', name: 'nena', email: 'lulu@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10347, lastName: 'test', name: 'mailo', email: 'mailo@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 10348, lastName: 'test', name: 'bigotes', email: 'nena@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 10348, lastName: 'test', name: 'gato', email: 'nena@mail.com', course: 'DISEÑO', createdAt: new Date(),}
  ];

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  getAlumnos(): Observable<AlumniData[]> {
    return of(estudiantesBD)
  }

}
