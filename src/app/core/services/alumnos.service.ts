import { Injectable } from '@angular/core';
import { AlumniData } from '../../shared/models/alumnos.model';
import { Observable, of } from 'rxjs';

  const estudiantesBD: AlumniData[] = [
    {id: 10345, lastName: 'Garcia', name: 'kika', email: 'kika@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10346, lastName: 'Perez', name: 'lucia', email: 'lucia@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10347, lastName: 'Balta', name: 'nancy', email: 'nancy@mail.com', course: 'ANGULAR', createdAt: new Date(),},
    {id: 10348, lastName: 'Flores', name: 'mailo', email: 'mailo@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 10349, lastName: 'Castillo', name: 'barto', email: 'barto@mail.com', course: 'REACTJS', createdAt: new Date(),},
    {id: 10350, lastName: 'Mendez', name: 'gonzalo', email: 'gonzalo@mail.com', course: 'DISEÑO', createdAt: new Date(),}
  ];

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  getAlumnos(): Observable<AlumniData[]> {
    return of(estudiantesBD)
  }

}
